export const TextField = ({ field, value }) => {

  const handleOnChange = (field, value) => {

  }

  return (
    <input
      id="password"
      type="password"
      placeholder="Password"
      className="input input-bordered input-primary w-full"
    // onChange={formik.handleChange}
    // value={formik.values.password}
    />
  );
}