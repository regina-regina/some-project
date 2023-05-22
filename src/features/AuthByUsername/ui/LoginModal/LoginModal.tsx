import React from 'react';
import { Modal } from 'shared/ui/Modal/Modal';

import { classNames } from '../../../../shared/lib/classNames/classNames';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    className={classNames(cls.LoginModal, {}, [className])}
    lazy
  >
    <LoginForm />
  </Modal>
);
