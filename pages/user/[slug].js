import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import Link from 'next/link';
import Router, { useRouter } from 'next/router';

/* utils */
import { absoluteUrl } from '../../middleware/utils';

/* components */


function User(props) {
  const router = useRouter();
  const { origin, referer, user } = props;
  const [titlePage, setTitlePage] = useState('Profile');

  useEffect(() => {
    switch (router.asPath) {
      case '/user/logout':
        Cookies.remove('token');
        Router.push({ pathname: '/', query: {} }, '/');
        break;
      case '/user/login':
        setTitlePage('Login');
        break;
      case '/user/register':
        setTitlePage('Register');
        break;
    }
  }, []);
}

/* getServerSideProps */
export async function getServerSideProps(context) {
  const { query, req } = context;
  const { origin } = absoluteUrl(req);

  const referer = req.headers.referer || '';
  const baseApiUrl = `${origin}/api`;

  let user = {};

  if (query.slug !== 'logout') {
    const userApi = await fetch(`${baseApiUrl}/user/${query.slug}`);
    user = await userApi.json();
  }

  return {
    props: {
      origin,
      referer,
      user,
    },
  };
}

export default User;
