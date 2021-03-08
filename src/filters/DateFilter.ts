import Vue from "vue";

const formatDateFilter = Vue.filter("formatDate", (date: Date) => {
  if (date === null) {
    return "";
  }

  return date.toLocaleDateString("de-CH", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
});
export default formatDateFilter;
