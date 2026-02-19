import NotFounfImg from "../assets/images/404NotFound.png";

function NotFoundPage({ todos }) {
  console.log(todos);

  return (
    <div className=" flex flex-col  items-center pt-[30px] text-center">
      <img src={NotFounfImg} alt="" />
      <p className="text-[20px] font-medium">Empty...</p>
    </div>
  );
}

export default NotFoundPage;
