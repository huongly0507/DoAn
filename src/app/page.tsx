'use client';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogClose,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

export default function Home() {
    return (
        <div className='flex flex-col justify-center items-center h-screen tablet:block laptop:flex desktop:flex'>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Click me!</Button>
                </DialogTrigger>
                <DialogContent className='bg-white p-6 rounded shadow-lg max-w-xs text-center'>
                    <DialogTitle>Huấn Hoa Hồng</DialogTitle>
                    <DialogDescription>
                        Cần cù thì bù siêng năng, có làm thì mới có ăn!
                    </DialogDescription>
                    <DialogClose asChild>
                        <Button>Cút</Button>
                    </DialogClose>
                </DialogContent>
            </Dialog>
        </div>
    );
}
