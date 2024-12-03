import { create } from 'zustand';
import { Review } from '../types';

interface ReviewState {
  reviews: Review[];
  addReview: (review: Omit<Review, 'id' | 'date'>) => void;
}

export const useReviewStore = create<ReviewState>((set) => ({
  reviews: [],
  addReview: (review) =>
    set((state) => ({
      reviews: [
        ...state.reviews,
        {
          ...review,
          id: crypto.randomUUID(),
          date: new Date().toISOString(),
        },
      ],
    })),
}));