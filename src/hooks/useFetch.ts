import { ComputedRef, reactive, watchEffect } from 'vue';

interface FetchState<T> {
  loading: boolean;
  error: string;
  data: T | null;
}

export default function useFetch<T>(url: ComputedRef<string>) {
  const state = reactive<FetchState<T>>({
    loading: false,
    error: '',
    data: null,
  });

  const fechData = async () => {
    state.loading = true;
    state.data = null;
    state.error = '';

    try {
      const response = await fetch(url.value, {
        headers: {
          accept: 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          model: 'default',
        }),
      });
      if (response.ok) {
        const json = await response.json();
        state.data = json;
      } else {
        state.error = 'Error fetching data.';
      }
    } catch (error) {
      state.error = `Error fetching data. ${error.message}`;
    }
    state.loading = false;
  };

  watchEffect(() => {
    fechData();
  });

  return state;
}
