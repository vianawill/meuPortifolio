/**
 * @copyright 2025 vianawill
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';

/**
 * Custom Modules
 */
import { fadeUp } from '@/lib/animations';

/**
 * Components
 */
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/SectionHeader';

/**
 * Types
 */
type ContactFromValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

export const Contact = () => {
  const form = useForm<ContactFromValues>({
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = (values: ContactFromValues) => {
    console.log(values);
  };
  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.8 }}
      variants={fadeUp}
      className='mt-30 scroll-mt-10'
      id='contact'
    >
      <SectionHeader
        subtitle='Contato'
        title={`Vamos criar algo incrível juntos!`}
      />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full mx-auto space-y-4 mt-10'
        >
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input
                      placeholder='Seu Nome'
                      className='border-0'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='company'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input
                      placeholder='Nome da Empresa'
                      className='border-0'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='you@example.com'
                      className='border-0'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='phone'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input
                      type='tel'
                      placeholder='00 00000-0000'
                      className='border-0'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Textarea
                    placeholder='Escreva sua mensagem...'
                    className='h-36 border-0'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type='submit'
            size='lg'
          >
            Enviar Mensagem
          </Button>
        </form>
      </Form>
    </motion.section>
  );
};
