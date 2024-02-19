import { useLocation, useNavigate } from "react-router-dom";
import ModalSignIn from "../../modal-sign-in";
import logo from "/assets/logo2000x2000.png";
import { FaArrowLeft } from "react-icons/fa";

export const Header = () => {
  const router = useNavigate();
  const location = useLocation();
  const handleOpenModal = () => {
    const dialog: any = document?.getElementById("sign-in");
    dialog?.showModal();
  };

  return (
    <>
      <div className="block w-full  mb-3 bg-white rounded border-b border-gray-300 z-[10]">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center bg-white rounded-sm">
            <img src={logo} alt="" className="w-auto h-16" />
          </div>
          <div className="flex-auto text-3xl font-semibold text-center">
            AVATAR FACE CUSTOMIZE
          </div>
          {/* actions */}
          <div className="flex gap-2">
            <button className="btn">Sign up</button>
            <button className="btn btn-primary" onClick={handleOpenModal}>
              Sign in
            </button>
          </div>
        </div>
      </div>
      {!location.pathname.endsWith("/") && (
        <div className="pl-3 my-3 text-sm breadcrumbs text-start">
          <button
            onClick={() => router(-1)}
            className="btn btn-sm btn-neutral hover:cursor-pointer"
          >
            <FaArrowLeft /> Back{" "}
          </button>
        </div>
      )}
      <ModalSignIn />
    </>
  );
};
