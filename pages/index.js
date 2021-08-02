import Link from 'next/link';

/* utils */
import { absoluteUrl } from '../middleware/utils';

/* components */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fas);

import {
  Carousel,
  Row,
  Col,
  Typography,
  Image,
  Button,
  Input,
  Card,
} from 'antd';

const { Text, Title } = Typography;

const { TextArea } = Input;


export default function Login(props) {
  const { user, origin } = props;

  return (
      <div className="mx-auto w-full max-w-sm py-8">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex items-center justify-between mt-2 mr-2 ml-2">
            <p className="">
            </p>
            <p className="">
              ยังไม่บัญชีผู้ใช้ ?
              <a href="register" className="text-black no-underline hover:text-green-500">
                สมัครสมาชิก
              </a>
            </p>
          </div>
          <div className="text-left mt-8">
            <p className="text-xl font-bold">เข้าสู่ระบบ</p>
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="#"
              type="text"
              placeholder="ชื่อผู้ใช้"
            ></input>
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="#"
              type="password"
              placeholder="รหัสผ่าน"
            ></input>
          </div>
          <div className="flex mt-6">
          </div>
          <div className="text-center">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2"
              type="button"
            >
              LOGIN
            </button>
            <a href="#" className="text-gray-400 hover:text-gray-800">
              ลืมรหัสผ่าน?
            </a>
          </div>
        </form>
      </div>
  );
}
/* getServerSideProps */
export async function getServerSideProps(context) {
  const { req } = context;
  const { origin } = absoluteUrl(req);

  return {
    props: {
      origin,
    },
  };
}
