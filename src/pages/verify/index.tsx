import HomeContent from '@/component/home-content';

import { useForm } from 'react-hook-form';
import './styled.css';

import useNotification from '@/hook/useNotification';
import { useNavigate } from 'react-router-dom';
import { IoArrowBackSharp } from 'react-icons/io5';

type FormData = {
  email: string;

  character: string;
  start: number;
  end: number;
};

const FormContact = 'form-verify';

const VerifyEmail = () => {
  const { success, error } = useNotification() || { success: () => {}, error: () => {} };

  const navigation = useNavigate();
  const {
    register,
    handleSubmit,

    reset,
  } = useForm<FormData>({
    defaultValues: {
      email: '',

      character: '',
      start: 0,
      end: 0,
    },
  });

  const onSubmit = async (data: FormData) => {
    handleCreate(data);
  };

  const handleCreate = (data: FormData) => {
    const params = {
      ...data,
      redirectPath: `https://giaithuongngoisaoxanh.1vote.vn/xac-nhan-tai-khoan?registerStatus=1&email=${data.email}`,
    };

    runSequentialCalls(params.email, params.character || '', +params.start, params.end);
  };

  // Hàm để gọi API
  async function callApi(emailUser: string, str: string, emailIndex: number) {
    let email = '';

    if (str != '') {
      email = `${emailUser}+${str}${emailIndex}@gmail.com`;
    } else {
      email = `${emailUser}+${emailIndex}@gmail.com`;
    }

    const body = {
      email: email,
    };

    fetch('https://eventista-platform-api.1vote.vn/v1/client/auth/email-verification', {
      method: 'PUT',
      headers: {
        accept: 'application/json',
        'accept-language': 'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7,fr-FR;q=0.6,fr;q=0.5',
        'content-type': 'application/json',
        lang: 'vi',
        origin: 'https://maleiconawards.1vote.vn',
        referer: 'https://maleiconawards.1vote.vn/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
      },
      body: JSON.stringify(body),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
      })
      .then(data => {
        success(`${data?.message} - Gửi xác thực cho vị trí ${emailIndex}`, 1000);
      })
      .catch(() => error(`Lỗi cho vị trí ${emailIndex}`, 1000));
  }

  // Hàm để tạo delay
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  // Hàm gọi API liên tục
  const runSequentialCalls = async (
    emailUser: string,

    str: string,
    start: number,
    end: number
  ) => {
    for (let i = start; i <= end; i++) {
      await callApi(emailUser, str, i);
      await delay(300);
    }
  };

  const resetFn = () => {
    reset({
      email: '', // Giá trị mặc định mới hoặc để trống nếu không cần
      character: '',
      start: 0,
      end: 0,
    });
  };
  return (
    <div className="relative">
      <img
        className="absolute opacity-[0.1] object-contain w-full h-full"
        src="https://maleiconawards.1vote.vn/_next/image?url=https%3A%2F%2Fmedia-platform.1vote.vn%2Fthumbnails%2Fuploads%2FoYbuW%2F1733681700645.jpg&w=1920&q=75"
      />

      <HomeContent id="info">
        <div className="w-full h-full flex justify-center items-center flex-col">
          <form
            className="w-full lg:w-[50%] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative"
            onSubmit={handleSubmit(onSubmit)}
            id={FormContact}
          >
            <a
              target="_blank"
              href="https://maleiconawards.1vote.vn/de-cu/namcasirapperduocyeuthich/son-tung-m-tp-046"
            >
              <h4 className="tag">
                Đề cử Giải thưởng Làn Sóng Xanh 2024: <span>Sơn Tùng M-TP</span>
              </h4>
            </a>
            <span className="content-back " onClick={() => navigation('/')}>
              <IoArrowBackSharp />
              <span>Quay lại</span>
            </span>
            <h3 className="title">Lấy lại mật khẩu</h3>

            <div className="content-block pt-1">
              <div className="content-card">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full p-y-[20px]
            py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline bg-color_white"
                  id="email"
                  type="text"
                  placeholder="Email (bỏ @gmail.com)"
                  {...register('email', { required: true })}
                />
              </div>

              <div className="content-card">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="character">
                  Ký tự
                </label>
                <input
                  className="shadow appearance-none border rounded w-full p-y-[20px]
            py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline bg-color_white"
                  id="character"
                  type="text"
                  placeholder="Character (ký tự)"
                  {...register('character', { required: false })}
                />
              </div>

              <div className="flex flex-col md:flex-row gap-7 ">
                <div className="content-card">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="character">
                    Bắt đầu từ số - ví dụ: 1
                  </label>
                  <input
                    className="w-[100px] shadow appearance-none border roundedp-y-[20px]
            py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline bg-color_white"
                    id="character"
                    type="number"
                    placeholder=" "
                    {...register('start', { required: true })}
                  />
                </div>

                <div className="content-card">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="character">
                    Kết thúc đến số - ví dụ: 10
                  </label>
                  <input
                    className="w-[100px] shadow appearance-none border rounded p-y-[20px]
py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline bg-color_white"
                    id="character"
                    type="number"
                    placeholder=""
                    {...register('end', { required: true })}
                  />
                </div>
              </div>
            </div>

            <div className="wrapper-button ">
              <button
                onClick={() => resetFn()}
                className="bg-[#78716c] text-[#dcfce7] hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                Reset dữ liệu
              </button>
              <button form={FormContact} className="rounded button-submit" type="submit">
                Tạo
              </button>
            </div>
          </form>
        </div>

        {/* {isLoading && <LoadingScreen />} */}
      </HomeContent>

      <p className="italic relative bottom-6"> Copyright @ 2024 by Chau Nguyen </p>
    </div>
  );
};

export default VerifyEmail;
