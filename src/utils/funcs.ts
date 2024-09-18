export const formatDate = (date: any) => {
  return new Date(date).toLocaleDateString("fa-IR");
};

export const getRemainingDays = (user: any) => {
  const now: any = new Date();
  const userSubscription: any = new Date(user.subscriptionEnd);
  if (!user.subscriptionEnd && userSubscription < now) {
    return false;
  } else {
    const remainingTime = userSubscription - now;
    const remainingDays = Math.ceil(remainingTime / (1000 * 60 * 60 * 24));

    return remainingDays;
  }
};

export function prepareData(startData: any, orders: any) {
  // A bit ugly code, but sometimes this is what it takes when working with real data 😅

  function incArrayValue(arr: any, field: any) {
    return arr.map((obj:any) =>
      obj.duration === field ? { ...obj, value: obj.value + 1 } : obj
    );
  }

  const data = orders
    .reduce((arr: any, cur: any) => {
      const num = cur.time;
      if (num === 30) return incArrayValue(arr, "اشتراک 30 روزه");
      if (num === 60) return incArrayValue(arr, "اشتراک 60 روزه");
      if (num === 90) return incArrayValue(arr, "اشتراک 90 روزه");
      if (num === 180) return incArrayValue(arr, "اشتراک 180");
      return arr;
    }, startData)
    .filter((obj:any) => obj.value > 0);

  return data;
}
