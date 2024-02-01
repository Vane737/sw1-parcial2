import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { CameraIcon, HomeIcon } from '@heroicons/react/24/solid'
import { Link, Outlet, useNavigate } from 'react-router-dom'
// import classNames from 'classnames'




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const  NavLoggin = () =>  {

    const navigate = useNavigate();
  const handleClickCreate = ()=>{
    navigate(`register`);
  }
  const handleClickLoggin = ()=>{
    navigate(`login`);
  }

    return (
    <div>
      <Disclosure as="nav" className="bg-primary pt-2 h-20 container">
   
          <>
            <div className="mx-auto sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                  {/* <CameraIcon className="h-5 w-5 mr-2" /> */}
                    <Link to="/" className="text-dark">
                      <h2 className="text-2xl font-bold flex items-center">
                      <span>
                      <CameraIcon className='"h-9 w-9 mr-2"'/>
                      </span>
                      &nbsp;
                      PhotoEvent
                    </h2>
                    </Link>
                  </div>
                  {/* <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div> */}
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="relative rounded-md bg-secondary font-bold p-2 mr-3 text-white hover:text-dark focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    onClick={handleClickLoggin}
                  >
                    Iniciar sesión
                    {/* <span className="absolute -inset-1.5" /> */}
                    {/* <span className="sr-only">View notifications</span> */}
                    {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                  </button>
                  <button
                    type="button"
                    className="relative rounded-md bg-white  p-2 text-primary hover:text-dark hover:bg-slate-100  font-bold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    onClick={handleClickCreate}
                  >
                    Registrar
                    {/* <span className="absolute -inset-1.5" /> */}
                    {/* <span className="sr-only">View notifications</span> */}
                    {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                  </button>
  
                  {/* Profile dropdown */}
                  {/* <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    
                  </Menu> */}
                </div>
              </div>
            </div>
  
            {/* <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel> */}
          </>
        
      </Disclosure>
      <Outlet />
    </div>
    )
}