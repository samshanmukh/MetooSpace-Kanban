function ButtonComponent({ ...props }) {
  return (
    <>
      <button className="rounded-md bg-[#ffb617e0] py-2 px-4 text-black hover:bg-[#ffb617]">
        {props.name}
      </button>
    </>
  )
}

export default ButtonComponent
