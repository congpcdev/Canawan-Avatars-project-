import { useNavigate } from "react-router-dom";
import { useQueryBaseList } from "../../data/queries/use-query-get-base";

const Centralized = () => {
  const { data } = useQueryBaseList();
  const router = useNavigate();

  const handleClick = (item: any) => {
    router(`/custom-avatar/${item.id}`);
  };
  return (
    <div className="flex items-center justify-center w-full h-full gap-3">
      {data?.map((item: any) => {
        return (
          <div
            key={item.id}
            onClick={() => handleClick(item)}
            className="transition-all duration-75 shadow-xl card card-compact w-96 bg-base-100 hover:cursor-pointer hover:translate-y-2"
          >
            <figure>
              <img src={item.url} alt={item.name} />
            </figure>
            <div className=" card-body">
              <h2 className="justify-center w-full card-title">{item.name}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Centralized;
