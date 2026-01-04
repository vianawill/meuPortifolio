/**
 * @copyright 2025 vianawill
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { motion } from 'motion/react';
import { ExternalLink, Info} from 'lucide-react';

/**
 * Custom Modules
 */
import { fadeUp } from '@/lib/animations';

/**
 * Components
 */
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

/**
 * Types
 */
import type { ProjectType } from '@/types';


export const ProjectCard = ({ imgSrc, description, title, projectLink }: ProjectType) => {
  return (
    <motion.div
      variants={fadeUp}
      className='relative group' // Adicionei 'group' para efeitos de hover melhores se precisar
    >
      <figure className='overflow-hidden rounded-md'>
        <img
          src={imgSrc}
          alt={title}
          className='rounded-md transition duration-500 hover:scale-110 w-full object-cover'
        />
      </figure>

      {/* Container dos Botões */}
      <div className='absolute bottom-0 p-2 flex gap-2' >
        
        {/* 1 - Botão com Link (Ex: Ver Demo ou GitHub) */}
        <Button asChild size="sm" className="flex-1 gap-2">
          <a href={projectLink || '#'} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} />
            Visitar
          </a>
        </Button>

        {/* 2 - Alert Dialog (Detalhes do Projeto) */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" size="sm" className="flex-1 gap-2">
              <Info size={16} />
              Sobre
            </Button>
          </DialogTrigger>
          
          <DialogContent className='flex-col gap-4'>
            <DialogHeader>
              <DialogTitle className='text-lg font-bold p-2'>{title}</DialogTitle>
              <DialogDescription className="text-zinc-300 text-base leading-relaxed text-left">
                {description}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className='flex items-center justify-center flex-row gap-4'>

              <Button asChild className='flex gap-2'>
                 <a href={projectLink || '#'} target="_blank" rel="noreferrer">Acessar Projeto<ExternalLink/></a>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

      </div>
    </motion.div>
  );
};
