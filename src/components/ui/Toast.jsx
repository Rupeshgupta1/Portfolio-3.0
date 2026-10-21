import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

const icons = {
  success: (
    <span className='flex h-8 w-8 items-center justify-center rounded-full bg-green-500/15 text-green-500'>
      <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' className='h-4 w-4'>
        <motion.path d='M5 13l4 4L19 7' initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 0.15 }} />
      </svg>
    </span>
  ),
  error: (
    <span className='flex h-8 w-8 items-center justify-center rounded-full bg-red-500/15 text-red-500 font-bold'>!</span>
  ),
};

// Rendered in a portal so transformed ancestors can't break position: fixed.
const Toast = ({ toast, onClose }) =>
  createPortal(
    <AnimatePresence>
      {toast && (
        <motion.div
          role='status'
          aria-live='polite'
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className='fixed bottom-6 right-6 z-50 flex max-w-[calc(100vw-3rem)] items-center gap-3 rounded-2xl border border-line bg-tertiary px-5 py-4 shadow-card'
        >
          {icons[toast.type]}
          <p className='text-sm font-medium text-ink'>{toast.message}</p>
          <button type='button' onClick={onClose} aria-label='Dismiss' className='ml-2 text-secondary hover:text-ink'>
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );

export default Toast;
