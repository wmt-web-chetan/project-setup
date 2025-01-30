export function hexTohsl(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  var r = parseInt(result[1], 16);
  var g = parseInt(result[2], 16);
  var b = parseInt(result[3], 16);

  r = r / 255;
  g = g / 255;
  b = b / 255;

  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h = (max + min) / 2;

  if (max === min) {
    h = 0; // achromatic
  } else {
    var d = max - min;
    // s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }

  // l = l * 100;
  // l = Math.round(l);
  h = Math.round(360 * h);

  // let colorInHSL = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
  return h;
}

export function bColor(length, hlsaVal) {
  let x = 0;
  let y = 100;
  let value = 95 / length;
  let color = [];
  for (let i = 0; i < length; i++) {
    x = x + value;
    y = y - value;
    color.push(
      "hsl(" + hlsaVal + ", " + parseInt(x) + "%, " + parseInt(y) + "%)"
    );
    // color.push({ x: parseInt(x), y: parseInt(y) })
  }
  return color;
}

export const formatter = (item) => {
  return ` $ ${item}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatterPrice = (item) => {
  return `${item}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export function formatPhoneNumber(value) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 8) {
    return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(4)}`;
  }
  if (phoneNumberLength < 12) {
    return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(
      4,
      8
    )} ${phoneNumber.slice(8, 12)}`;
  }
  return `${phoneNumber.slice(0, 4)} ${phoneNumber.slice(
    4,
    8
  )} ${phoneNumber.slice(8, 12)} ${phoneNumber.slice(12, 16)}`;
}

export function formatExpireDate(value) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 2) return phoneNumber;
  return `${phoneNumber.slice(0, 2)}/${phoneNumber.slice(2, 4)}`;
}

export function formatCvv(value) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  return `${phoneNumber.slice(0, 4)}`;
}
export const formatDate = (value) => {
  if (!value) return "";
  const date = new Date(value);
  if (!date) return "";

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  return day + " " + month;
};

export const dcryptedData = (data) => {
  // Attempt to decode the data
  let decodedData;
  let secondDecodedData;
  try {
    const firstDecodedData = window.atob(data);
    secondDecodedData = window.atob(firstDecodedData);
    decodedData = secondDecodedData;
  } catch (error) {
    decodedData = data;
  }

  return decodedData;
};

export const encryptedData = (data) => {
  // Attempt to encode the data
  let encodedData;
  try {
    const firstEncodedData = window.btoa(data);
    encodedData = window.btoa(firstEncodedData);
  } catch (error) {
    // Handle encoding error if needed
    console.error('Error encoding data:', error);
    encodedData = data; // Return original data on error
  }

  return encodedData;
};
export const dcryptedDataForReport = (data) => {
  // Attempt to decode the data
  let decodedData;
  let secondDecodedData;
  try {
    const firstDecodedData = window.atob(data);
    secondDecodedData = window.atob(firstDecodedData);
    decodedData = JSON.parse(secondDecodedData);
  } catch (error) {
    decodedData = data;
  }

  return decodedData;
};
export function formatDateTime(isoDateStr) {
  let date = new Date(isoDateStr);

  // Get the local date components
  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  let year = date.getFullYear();

  // Get the local time components
  let hours = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");

  // Format the date as DD/MM/YYYY
  let formattedDate = `${day}/${month}/${year}`;

  // Format the time as HH:MM:SS
  let formattedTime = `${hours}:${minutes}:${seconds}`;

  // Return an object with the formatted date and time
  return {
    date: formattedDate,
    time: formattedTime,
  };
}

// download pdf
export const downloadPdf = async (url) => {
  const pdfUrl = url; // Replace with your PDF link

  try {
    const response = await fetch(pdfUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sample.pdf"; // Name the downloaded file
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading the PDF", error);
  }
};


export const downloadSharesummaryPdf = async (url) => {
  console.log(url,"fffgffg")
  const pdfUrl = url;

  try {
    const response = await fetch(pdfUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const blob = await response.blob();
    const url = window.URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "summary.pdf"; // Name the downloaded file
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading the PDF", error);
  }
};


export const downloadCSV = async (url) => {
  const xlsxUrl = url; // Replace with your .xlsx link

  try {
    const response = await fetch(xlsxUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = "sample.xlsx"; // Name the downloaded file as .xlsx
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(downloadUrl);
  } catch (error) {
    console.error("Error downloading the XLSX", error);
  }
};

export const downloadCSVExport = async (url) => {
  const xlsxUrl = url; // Replace with your .xlsx link

  try {
    const response = await fetch(xlsxUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = "data_export.xlsx"; // Name the downloaded file as .xlsx
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(downloadUrl);
  } catch (error) {
    console.error("Error downloading the XLSX", error);
  }
};

// Utility function to truncate text
export const truncateText = (text, maxLength) => {
  if (text?.length > maxLength) {
    return text?.substring(0, maxLength) + "...";
  }
  return text;
};