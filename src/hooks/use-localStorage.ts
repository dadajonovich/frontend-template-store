import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store';
import { useEffect } from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export const useLocalStorage = <T>(
  key: string,
  selector: (state: RootState) => T,
  action: ActionCreatorWithPayload<T, string>,
) => {
  const obj = useSelector(selector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(action(JSON.parse(localStorage.getItem(key) || '[]')));
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(obj));
  }, [obj]);
};
