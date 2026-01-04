/**
 * @copyright 2025 vianawill
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { motion } from 'motion/react';

/**
 * Custom Modules
 */
import { fadeUp, staggerContainer } from '@/lib/animations';

/**
 * Components
 */
import { Button } from '@/components/ui/button';

/**
 * Assets
 */
import { SparkleIcon } from 'lucide-react';

export const Hero = () => {
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='pt-20'
      id='hero'
    >
      <motion.p
        variants={fadeUp}
        className='flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-32'
      >
        <SparkleIcon size={15} /> <span className=''>Introdução</span>
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className='text-4xl md:text-5xl lg:text-6xl font-semibold capitalize mt-2 max-w-3xl md:leading-16'
      >
        Olá, eu sou o <span className='text-primary'>Willian</span>,
        Desenvolvedor FrontEnd.
      </motion.h1>

      <motion.div
        variants={fadeUp}
        className='mt-5 flex gap-2 '
      >
        <Button asChild>
          <a href='#projects'>Meus Projetos</a>
        </Button>

        <Button variant='outline'>
          <a
            href='/CV - DEZ 2025.pdf'
            download='Curriculo_Willian_Viana.pdf'
          >
            Baixar CV
          </a>
        </Button>
      </motion.div>
    </motion.section>
  );
};
