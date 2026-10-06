(function () {
  var KEY = "suvana_cart";

  function read() {
    try {
      return JSON.parse(localStorage.getItem(KEY) || "[]");
    } catch (e) {
      return [];
    }
  }

  function write(items) {
    localStorage.setItem(KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent("suvana:cart", { detail: items }));
  }

  function count() {
    return read().reduce(function (n, i) {
      return n + i.qty;
    }, 0);
  }

  function subtotal() {
    return read().reduce(function (n, i) {
      var p = window.getProductById(i.id);
      return n + (p ? p.price * i.qty : 0);
    }, 0);
  }

  function add(item) {
    var items = read();
    var found = items.find(function (i) {
      return i.id === item.id && i.size === item.size && i.color === item.color;
    });
    if (found) found.qty += item.qty || 1;
    else items.push({ id: item.id, size: item.size, color: item.color, qty: item.qty || 1 });
    write(items);
  }

  function setQty(index, qty) {
    var items = read();
    if (!items[index]) return;
    if (qty < 1) items.splice(index, 1);
    else items[index].qty = qty;
    write(items);
  }

  function remove(index) {
    var items = read();
    items.splice(index, 1);
    write(items);
  }

  function clear() {
    write([]);
  }

  function whatsappMessage() {
    var lang = document.documentElement.getAttribute("lang") || "en";
    var lines = lang === "ar" ? ["مرحبا SUVANA، عايز أطلب:"] : ["Hello SUVANA, I want to order:"];
    read().forEach(function (i) {
      var p = window.getProductById(i.id);
      if (!p) return;
      var color = p.colors.find(function (c) {
        return c.id === i.color;
      });
      var cname = color ? color.name[lang] : i.color;
      lines.push((lang === "ar" ? "المنتج: " : "Product: ") + p.name[lang]);
      lines.push((lang === "ar" ? "المقاس: " : "Size: ") + i.size);
      lines.push((lang === "ar" ? "اللون: " : "Color: ") + cname);
      lines.push((lang === "ar" ? "الكمية: " : "Quantity: ") + i.qty);
      lines.push("");
    });
    return lines.join("\n");
  }

  function productWhatsapp(product, size, colorId, qty) {
    var lang = document.documentElement.getAttribute("lang") || "en";
    var color = product.colors.find(function (c) {
      return c.id === colorId;
    });
    var cname = color ? color.name[lang] : colorId;
    if (lang === "ar") {
      return (
        "مرحبا SUVANA، عايز أطلب:\nالمنتج: " +
        product.name.ar +
        "\nالمقاس: " +
        size +
        "\nاللون: " +
        cname +
        "\nالكمية: " +
        qty
      );
    }
    return (
      "Hello SUVANA, I want to order:\nProduct: " +
      product.name.en +
      "\nSize: " +
      size +
      "\nColor: " +
      cname +
      "\nQuantity: " +
      qty
    );
  }

  function waUrl(text) {
    return "https://wa.me/" + window.SUVANA_CONFIG.whatsapp + "?text=" + encodeURIComponent(text);
  }

  window.SuvanaCart = {
    read: read,
    add: add,
    setQty: setQty,
    remove: remove,
    clear: clear,
    count: count,
    subtotal: subtotal,
    whatsappMessage: whatsappMessage,
    productWhatsapp: productWhatsapp,
    waUrl: waUrl
  };
})();
