export const calMyBag = async (data, context, type) => {
  const checkIdProduct = context.MyBag.some(val => val.id === data.id);
  let checkIdandSetAdmount;
  let initData = {
    id: data.id,
    imageUrl: data.imageUrl,
    price: data.price,
    amount: 1,
    productName: data.productName,
  };

  if (checkIdProduct) {
    checkIdandSetAdmount = await context.MyBag.map(val => {
      let newData = val;
      if (val.id === data.id) {
        newData = {
          ...val,
          amount:
            type !== 'minus'
              ? val.amount + 1
              : val.amount > 0
              ? val.amount - 1
              : 0,
        };
      }
      return newData;
    }).filter(val => val.amount !== 0);
    context.setBag(checkIdandSetAdmount);
    context.setTotalPrice(
      type !== 'minus'
        ? context.totalPrice + data.price
        : context.totalPrice > 0
        ? context.totalPrice - data.price
        : 0,
    );
  } else {
    context.setBag([...context.MyBag, initData]);
    context.setTotalPrice(context.totalPrice + initData.price);
  }
};

export const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
