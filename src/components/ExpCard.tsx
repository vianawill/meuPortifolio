/**
 * @copyright 2025 vianawill
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { Info } from 'lucide-react';

/**
 * Components
 */
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

/**
 * Types
 */
import type { ExperienceType } from '@/types';

export const ExpCard = ({ item }: { item: ExperienceType }) => {
  const showInfoButton = item.category === 'job';

  return (
    <div className='relative group pl-2'>
      {/* Bolinha da timeline */}
      <div className='absolute -left-7.5 top-2 size-3 bg-muted-foreground group-hover:bg-primary rounded-full transition duration-300'></div>

      {/* Ano */}
      <span className='text-neutral-400 lining-nums group-hover:text-primary transition duration-300 block mb-1'>
        {item.year}
      </span>

      {/* Cabeçalho do Card (Título + Botão Opcional) */}
      <div className='flex items-center justify-between gap-4 mb-1'>
        <h3 className='text-lg font-semibold'>{item.title}</h3>

        {/* RENDERIZAÇÃO CONDICIONAL */}
        {showInfoButton && (
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant='ghost'
                size='icon'
                className='h-8 w-8 text-neutral-400 hover:text-primary shrink-0'
              >
                <Info className='size-5' />
              </Button>
            </DialogTrigger>

            <DialogContent className='bg-zinc-950 border-zinc-800 max-h-[85vh] overflow-y-auto'>
              <DialogHeader>
                <DialogTitle className='text-xl text-white mb-1'>
                  {item.title}
                </DialogTitle>

                <div className='text-sm text-primary mb-4 font-medium'>
                  {item.institute} • {item.year}
                </div>

                <DialogDescription className='text-zinc-300 leading-relaxed text-base text-left'>
                  {item.report}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <p className='text-sm text-neutral-400 mb-2'>
        Realizado no(a):{' '}
        <span className='font-medium text-foreground'>{item.institute}</span>
      </p>

      {/* Descrição Completa no Card (Sem limite de linhas) */}
      <p className='text-sm text-neutral-400 leading-relaxed'>{item.desc}</p>
    </div>
  );
};
