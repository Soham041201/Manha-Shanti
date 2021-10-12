/* This example requires Tailwind CSS v2.0+ */
import { Fragment,useState,useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {MenuIcon, XIcon } from '@heroicons/react/outline'
import {useHistory} from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import {db} from '../firebase/firebase'
import { logout } from '../Auth'
const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Team', href: '/team', current: false },
  { name: 'Podcasts', href: '/podcast', current: false },
  { name: 'Music', href: '/music', current: false },
  { name: 'Diary', href: '/diary', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  const[fname,setfName] = useState("")
  const[image,setImage] = useState("")
  useEffect(async()=> {
    var data = localStorage.getItem("user")
    const user= JSON.parse(data)
    if(user!==null){
      const docRef = doc(db, "users",user.email)
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
          console.log(docSnap.data());
          setfName(`Welcome, ${docSnap.data().firstName.name}`)
          setImage(docSnap.data().DisplayImage)
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
    }
    
  },)
  
  const page= useHistory()
  const handleLogout=async(e)=>{
    localStorage.clear()
     await logout()
    page.push("/")
  }
  
  return (
    <div className="sticky">
    <Disclosure as="nav" className="bg-olive green-300 ">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="sticky flex items-center justify-between h-24">
              <div className=" flex relative inset-y-3 left-0  items-center  sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-white text-6xl subpixel-antialiased" id="Hero">Manha Shanti</h1>
                </div>
                <div className="hidden sm:block sm:ml-6 ml-lg">
                  <div className="flex space-x-4 text-center mt-3 nav-links" >
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-blue-500 text-white' : 'text-white hover:bg-blue-400 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <p className="text-white">{fname}</p>
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={fname? image :"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
                        alt=""
                      />
                    </Menu.Button>
                 
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/profile"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                          href="/login"
                            onClick={handleLogout}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-7 00')}
                          >
                           {fname?"Logout":"Login"}
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </div>
  )
}
