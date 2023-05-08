type Action =
  | {
      type: "next";
      value: { answer: string; choice: string };
    }
  | { type: "reset" };

export const initialState = {
  highStreak: 0,
  streak: 0,
  current: 0,
  points: 0
};

export function reducer(state: typeof initialState, action: Action): typeof initialState {
  switch (action.type) {
    case "next": {
      const current = state.current + 1;
      let highStreak = state.highStreak;
      let nextStreak = state.streak;
      let points = state.points;
      if (action.value.answer === action.value.choice) {
        points++;
        nextStreak++;
        if (nextStreak > state.highStreak) {
          highStreak++;
        }
      } else {
        nextStreak = 0;
      }
      return {
        current,
        highStreak,
        streak: nextStreak,
        points
      };
    }
    case "reset": {
      return {
        current: 0,
        highStreak: 0,
        streak: 0,
        points: 0
      };
    }
    default: {
      return state;
    }
  }
}
