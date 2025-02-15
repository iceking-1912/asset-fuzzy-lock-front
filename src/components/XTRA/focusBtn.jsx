function FocusBtn() {
  const colors = [
    "amber-50",
    "amber-100",
    "amber-200",
    "amber-300",
    "amber-400",
    "amber-500",
    "amber-600",
    "amber-700",
    "amber-800",
    "amber-900",
    "amber-950",
  ];

  return (
    <>
      <div className="flex justify-center h-screen items-center">
        {colors.reduceRight(
          (child, color) => (
            <div
              className={`flex justify-center shadow-2xl shadow-gray-900 items-center p-5 m-5 rounded-4xl bg-${color}`}
            >
              {child}
            </div>
          ),
          <h1 className="text-blue-50 font-bold">HI</h1>
        )}
      </div>
    </>
  );
}

export default FocusBtn;
