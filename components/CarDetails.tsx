'use client';
import { CarProps } from '@/types';
import {Fragment} from 'react'
import Image from 'next/image';
import {Dialog,Transition} from '@headlessui/react'


interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car:CarProps;
}

const CarDetails = ({isOpen,closeModal,car}: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child as={Fragment} enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100" 
          leave="ease-in duration-200"
          leaveFrom='opacity-100'
          leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-25'>

            </div>
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child as={Fragment} enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100" 
          leave="ease-in duration-200"
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'>
           <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] transform rounded-2xl bg-white p-10 text-left shadow-xl transition-all flex flex-col gap-1">
            <button 
            type="button"
            className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
            onClick={closeModal}
            >
              <Image 
              src="/close.svg"
              alt="close"
              width={20}
              height={20}
              className='object-contain'>
              </Image>
            </button>
            <div className="flex-1 flex flex-col ">
              <div className='relative w-full h-40 max-h-40 bg-pattern bg-cover bg-center rounded-lg' >
                <Image src={"/"+car.year+"_"+car.make+"_"+car.model+".png"}  alt='car model' fill priority className='object-contain'></Image>
              </div>
          
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <h3 className='font-semibold text-xl capitalize'>
                {car.make}{car.model}
              </h3>
              <div className='mt-3 flex flex-wrap gap-4'>
                {
                  Object.entries(car).map(([key,value])=>(
                    <div className='flex justify-between gap-5 w-full text-right' key={key}>
                      <h4 className='text-grey capitalize text-sm'>{key.split("_").join(" ")}</h4>
                      <p className='text-black-100 font-semibold text-sm'>{value}</p>
                      </div>
                  )
                )}

              </div>
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

export default CarDetails