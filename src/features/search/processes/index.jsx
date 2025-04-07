'use client';

import { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';

import * as DrawerPrimitive from '@/components/ui/drawer';
import useDebounce from '@/shared/hooks/useDebounce';
import { Button } from '@/components/ui/button';

const SearchDrawer = ({ open, setOpen }) => {
    return (
        <DrawerPrimitive.Drawer open={open} onOpenChange={setOpen} direction="right">
            <DrawerPrimitive.DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerPrimitive.DrawerHeader>
                        <DrawerPrimitive.DrawerTitle>Move Goal</DrawerPrimitive.DrawerTitle>
                        <DrawerPrimitive.DrawerDescription>
                            Set your daily activity goal.
                        </DrawerPrimitive.DrawerDescription>
                    </DrawerPrimitive.DrawerHeader>
                    <div className="p-4 pb-0"></div>
                    <DrawerPrimitive.DrawerFooter>
                        <DrawerPrimitive.DrawerClose asChild>
                            <button variant="outline">Cancel</button>
                        </DrawerPrimitive.DrawerClose>
                    </DrawerPrimitive.DrawerFooter>
                </div>
            </DrawerPrimitive.DrawerContent>
        </DrawerPrimitive.Drawer>
    );
};

const SearchForm = ({input, setInput}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <form className="hidden md:flex" onSubmit={handleSubmit}>
            <label className="items-center border rounded-full bg-accent min-h-12 pl-4 flex-1">
                <input 
                    type="text" 
                    className='focus:border-none focus-within:outline-0 h-full'
                    autoCorrect="false" autoComplete="false" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button type='submit' variant="secondary" className={'h-full items-center px-6 flex-1'}>
                    <CiSearch  size={22}/>
                    Search
                </Button>
            </label>
        </form>
    );
};
export const SearchProcesses = ({ searchInput }) => {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const debouncedInput = useDebounce(input, 300);

    useEffect(() => {
        if (debouncedInput) {
            console.log(debouncedInput);
        }
    }, [debouncedInput]);
    return (
        <>
            <button onClick={() => setOpen(true)} className="block cursor-pointer md:hidden">
                <CiSearch />
            </button>
            <SearchForm {...{input, setInput}}/>
            <SearchDrawer {...{ open, setOpen }} />
        </>
    );
};
