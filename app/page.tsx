'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';
import Image from 'next/image'
import { inter, notoSans } from './ui/fonts'

const aboutUs = [
  { name: 'Founding Members', href: './founding_members' },
  { name: 'Current Heads', href: './current_heads'}
]

const projects = [
  { name: 'PSHS Grade 7 Mentoring', href: './pshs_g7' },
  { name: 'Sitio San Roque Mentoring', href: './san_roque' }
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white sticky top-0 drop-shadow-lg z-40">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-3.5 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="#" className="-m-1.5 p-1.5">
              <img
                alt=""
                src="/eruditeLogoBlack.png"
                className="h-20 w-auto"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <Bars3Icon aria-hidden="true" className="size-8 mr-3.5" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12 mr-8">
          <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-base/6  font-semibold text-gray-900 hover:text-purple-700">
                About Us
                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
              </PopoverButton>
              <PopoverPanel
                transition
                className="absolute top-full -left-8 z-10 mt-5 w-screen max-w-xs overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
              >
                <div className="p-6">
                  {aboutUs.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex ml-3 p-1 items-center gap-x-6 text-sm/6 hover:bg-gray-50"
                    >
                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-base/6 font-semibold text-gray-900 hover:text-purple-700">
                Our Projects
                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
              </PopoverButton>
              <PopoverPanel
                transition
                className="absolute top-full -left-8 z-10 mt-5 w-screen max-w-xs overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
              >
                <div className="p-6">
                  {projects.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex ml-3 p-1 items-center gap-x-6 text-sm/6 hover:bg-gray-50"
                    >
                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
            
            <Link href="./resources" className="text-base/6 font-semibold text-gray-900 hover:text-purple-700">
              Resources
            </Link>
            <Link href="./get_involved" className="text-base/6 font-semibold text-gray-900 hover:text-purple-700">
              Get Involved
            </Link>
            <Link href="./contact_us" className="text-base/6 font-semibold text-gray-900 hover:text-purple-700">
              Contact Us
            </Link>
          </PopoverGroup>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                <img
                  alt=""
                  src="/eruditeLogoBlack.png"
                  className="h-10 w-auto mt-3"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                      About Us
                      <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...aboutUs].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                      Our Projects
                      <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...projects].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  <Link
                    href="./resources"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Resources
                  </Link>
                  <Link
                    href="./get_involved"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Get Involved
                  </Link>
                  <Link
                    href="./contact_us"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <div className='overflow-scroll'>
          <div
            className="w-full h-screen bg-[url('/landingImage.png')] bg-cover bg-center">
            <div className="w-full h-full flex flex-col justify-center items-center backdrop-blur-sm">
            </div>
          </div>
          <div className="flex max-w-10xl p-5 m-8 pt-40 text-center justify-center items-center">
            <h1 className={`${inter.className} font-semibold text-3xl`}>What is Project Erudite Path Mentoring?</h1>
          </div>
          <div className="flex text-center justify-center items-center">
              <p className="w-2/3 text-lg">Project Erudite Path Mentoring is a student-led organization based in PSHS-MC, which aims to provide free mentoring services
                 to students in different communities. These mentoring programs aim to develop 
                 students’ academic prowess that will help them in their future endeavors. 
                 Erudite Path also gives its mentors the opportunity to connect with our fellow students 
                 in and outside Pisay. </p>
          </div>
          <div>
            <Image
              src="/homepage2.jpg"
              width={1600}
              height={1009}
              className="p-40 -mt-20"
              alt="Picture from one of our sessions"
            />
          </div>
          <div className='flex text-center justify-center -mt-20 mb-20'>
              <p className='w-2/3 text-lg'>
                Our vision is that Project Erudite Path Mentoring will improve the quality of education by providing assistance to students who need it. 
                We hope that we will be able to foster a community for our mentees to express their interests and opinions about their school lives, ultimately
                providing a bridge between the students and their academic potential.
              </p>
          </div>
      </div>
    </div>
  )
}
