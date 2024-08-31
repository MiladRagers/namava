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
