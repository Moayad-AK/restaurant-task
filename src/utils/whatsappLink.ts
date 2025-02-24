const phoneNumber = "963997152622";

const handleWhatsappClick = () => {
  const url = `https://wa.me/${phoneNumber}`;
  window.open(url, "_blank");
};

export default handleWhatsappClick;
