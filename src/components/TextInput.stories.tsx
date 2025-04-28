import { Envelope } from '@phosphor-icons/react';
import type { Meta, StoryObj } from '@storybook/react';
import { TextInput, type TextInputRootProps } from './TextInput';

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
            <TextInput.Icon>
                <Envelope/>
            </TextInput.Icon>,
            // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
            <TextInput.Input placeholder='Type your e-mail here.' />    
        ],
    },
    argTypes:{
        children:{
            table:{
                disable: true,
            }
        }
    }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args:{
        children:
            <TextInput.Input placeholder='Type your e-mail here.' />
        
    }
}
