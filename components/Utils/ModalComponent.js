import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import dynamic from 'next/dynamic'
import moment from 'moment'

const NewArticleItem = dynamic(() => import('../Article/NewArticleItem'))

export default function ModalComponent({ ...props }) {
  let [newArticle, setNewArticle] = useState("")
  let [isOpen, setIsOpen] = useState(false)
  const [startDate, setStartDate] = useState(new Date());

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function createArticle() {
    console.log(startDate)
    props.childToParent({
      id: (props.articles.length + 1).toString(),
      title: newArticle,
      date: moment(startDate, "MM-DD-YYYY").format('MM-DD-YYYY'),
      excerpt:
        'GitHub today announced a bunch of new features at its virtual GitHub...',
      body:
        'GitHub today announced a bunch of new features at its virtual GitHub Universe conference including dark mode, auto-merge pull requests, and Enterprise Server 3.0. In the past couple of years, almost all major apps have rolled out a dark theme for its users, so why not GitHub?',
    })
    closeModal()
  }

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-[#ffb617e0] py-2 px-4 text-black hover:bg-[#ffb617]">
          {props.name}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Insert Title
                  </Dialog.Title>

                  <NewArticleItem setList={setNewArticle} sDate={startDate} setDate={setStartDate} />

                  <div className="mt-4 w-full mb-5">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#ffb617e0] px-4 py-2 text-sm font-medium text-black hover:bg-[#ffb617] focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                      onClick={createArticle}
                    >
                      Save
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
