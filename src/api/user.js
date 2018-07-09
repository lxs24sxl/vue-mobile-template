import fetch from '@/utils/fetch';

export function Login( data ) {
  return fetch({
    url: "/login",
    methods: "post",
    data
  });
};