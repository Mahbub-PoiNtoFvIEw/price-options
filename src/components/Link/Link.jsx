const Link = ({route}) => {
  return (
    <li className="hover:bg-black hover:text-white py-2 px-4 md:py-0 md:rounded-xl">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
