import { Slot } from '@radix-ui/react-slot';
import type { InputHTMLAttributes, ReactNode } from 'react';


export interface TextInputRootProps {
    children: ReactNode;
}


function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800  focus-within:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    )

};

export interface TextInputIconProps {
    children: ReactNode;
}

TextInputRoot.displayName = 'TextInput.Root';

function TextInputIcon(props: TextInputIconProps) {
    return (
       <Slot className='w-6 h-6 text-gray-400'>
           {props.children}
       </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon';


export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

function TextInputInput(props: TextInputInputProps) {
    return (
        <input
            type='text'
            className="bg-transparent flex-1 text-gray-100  text-xs placeholder:text-gray-400 outline-none w-full"
            {...props}
        />
    )
}

TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}
