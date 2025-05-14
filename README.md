# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

  <form onSubmit={handleFormSubmit}>
                            <div className="flex gap-3">
                                {/* From Date Input */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        {language === "EN" ? "From Date" : "من تاريخ"}
                                    </label>
                                    <input
                                        type="datetime-local"
                                        value={from_date}
                                        onChange={(e) => setFromDate(e.target.value)}
                                        className="w-full border border-gray-300 rounded p-2"
                                        required
                                    />
                                </div>

                                {/* To Date Input */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        {language === "EN" ? "To Date" : "إلى تاريخ"}
                                    </label>
                                    <input
                                        type="datetime-local"
                                        value={to_date}
                                        onChange={(e) => setToDate(e.target.value)}
                                        className="w-full border border-gray-300 rounded p-2"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between gap-3">
                                {/* Select SKU */}
                                <div className="mt-4">
                                    <label className="block text-sm font-medium mb-1">
                                        {language === "EN" ? "SKU" : "المنتج"}
                                    </label>
                                    <select
                                        value={selectedSKU}
                                        onChange={(e) => setSelectedSKU(e.target.value)}
                                        className="w-full border border-gray-300 rounded p-2"
                                        required
                                    >
                                        <option value="">{language === "EN" ? "Select SKU" : "اختر المنتج"}</option>
                                        {products.map((sku) => (
                                            <option key={sku.id} value={sku.id}>
                                                {language === "EN" ? sku.name : sku.arabic_name}
                                            </option>
                                        ))}
                                    </select>


                                    {/* Select Meter */}

                                    <label className="block text-sm font-medium mb-1">
                                        {language === "EN" ? "Meter" : "العداد"}
                                    </label>
                                    <select
                                        value={selectedMeter}
                                        onChange={(e) => setSelectedMeter(e.target.value)}
                                        className="w-full border border-gray-300 rounded p-2"
                                        required
                                    >
                                        <option value="">{language === "EN" ? "Select Meter" : "اختر العداد"}</option>
                                        {meters.map((meter) => (
                                            <option key={meter.id} value={meter.id}>
                                                {language === "EN" ? meter.name : meter.arabic_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mt-4">
                                    <label className="block text-sm font-medium mb-1">
                                        {language === "EN" ? "SKU" : "المنتج"}
                                    </label>
                                    <select
                                        value={selectedSKU}
                                        onChange={(e) => setSelectedSKU(e.target.value)}
                                        className="w-full border border-gray-300 rounded p-2"
                                        required
                                    >
                                        <option value="">{language === "EN" ? "Select SKU" : "اختر المنتج"}</option>
                                        {products.map((sku) => (
                                            <option key={sku.id} value={sku.id}>
                                                {language === "EN" ? sku.name : sku.arabic_name}
                                            </option>
                                        ))}
                                    </select>


                                    {/* Select Meter */}

                                    <label className="block text-sm font-medium mb-1">
                                        {language === "EN" ? "Meter" : "العداد"}
                                    </label>
                                    <select
                                        value={selectedMeter}
                                        onChange={(e) => setSelectedMeter(e.target.value)}
                                        className="w-full border border-gray-300 rounded p-2"
                                        required
                                    >
                                        <option value="">{language === "EN" ? "Select Meter" : "اختر العداد"}</option>
                                        {meters.map((meter) => (
                                            <option key={meter.id} value={meter.id}>
                                                {language === "EN" ? meter.name : meter.arabic_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mt-4">
                                    <label className="block text-sm font-medium mb-1">
                                        {language === "EN" ? "SKU" : "المنتج"}
                                    </label>
                                    <select
                                        value={selectedSKU}
                                        onChange={(e) => setSelectedSKU(e.target.value)}
                                        className="w-full border border-gray-300 rounded p-2"
                                        required
                                    >
                                        <option value="">{language === "EN" ? "Select SKU" : "اختر المنتج"}</option>
                                        {products.map((sku) => (
                                            <option key={sku.id} value={sku.id}>
                                                {language === "EN" ? sku.name : sku.arabic_name}
                                            </option>
                                        ))}
                                    </select>


                                    {/* Select Meter */}

                                    <label className="block text-sm font-medium mb-1">
                                        {language === "EN" ? "Meter" : "العداد"}
                                    </label>
                                    <select
                                        value={selectedMeter}
                                        onChange={(e) => setSelectedMeter(e.target.value)}
                                        className="w-full border border-gray-300 rounded p-2"
                                        required
                                    >
                                        <option value="">{language === "EN" ? "Select Meter" : "اختر العداد"}</option>
                                        {meters.map((meter) => (
                                            <option key={meter.id} value={meter.id}>
                                                {language === "EN" ? meter.name : meter.arabic_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-end mt-4">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    {language === "EN" ? "Submit" : "إرسال"}
                                </button>
                            </div>
                        </form>


                            const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `${BaseUrl}/eng_sku/?from_date=${from_date}&to_date=${to_date}&sku=${selectedSKU}&meter=${selectedMeter}`
            );
            const data = await response.json();

            const labels = data.map(item => formatDate(item.date));
            const kwhData = data.map(item => item.kwh_per_unit);

            setChartData({
                labels,
                datasets: [{
                    label: language === "EN" ? "kWh/Unit" : "كيلوواط/وحدة",
                    data: kwhData,
                    borderColor: "rgba(75, 192, 192, 1)",
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    fill: true,
                }],
            });
        } catch (error) {
            console.error("Error fetching filtered data:", error);
        }
    };


      const handleSubmit = async () => {
        try {
            const token = localStorage.getItem("access_token");
            if (!token) {
                setError(
                    language === "EN"
                        ? "Authorization token is missing."
                        : "التوكن مفقود."
                );
                return;
            }

            // التحقق من صحة التواريخ قبل إرسال الطلب
            const fromDateTime = new Date(`${formData.fromDate}`);
            const toDateTime = new Date(`${formData.toDate}`);
            const currentDateTime = new Date(); // الوقت الحالي

            // التحقق من أن تاريخ البداية قبل تاريخ النهاية
            if (fromDateTime > toDateTime) {
                setError(
                    language === "EN"
                        ? "The 'From' date/time cannot be after the 'To' date/time."
                        : "لا يمكن أن يكون تاريخ/وقت البداية بعد تاريخ/وقت النهاية."
                );
                return;
            }

            // التحقق من أن وقت النهاية ليس في المستقبل
            if (toDateTime > currentDateTime) {
                setError(
                    language === "EN"
                        ? "The 'To' time cannot be in the future."
                        : "لا يمكن أن يكون وقت النهاية في المستقبل."
                );
                return;
            }

            // طباعة البيانات المرسلة للتأكد من صحتها
            console.log("Form Data:", formData);

            // إرسال الطلب إلى الخادم
            const response = await axios.post(`${BaseUrl}/calculate/`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            console.log("Response:", response);

            // عرض رسالة نجاح
            setSuccess(
                language === "EN"
                    ? "Calculation submitted successfully!"
                    : "تم إرسال الحساب بنجاح!"
            );

            // إعادة تعيين الحقول
            setFormData({
                fromDate: "",
                toDate: "",
                meter_id: null,
            });

            handleClosePopup(); // إغلاق النافذة المنبثقة
            fetchUsers(); // جلب البيانات المحدثة
        } catch (error) {
            console.error("Error Connection:", error);
            setError(
                language === "EN"
                    ? "Failed to submit calculation. Please try again."
                    : "فشل في إرسال الحساب. يرجى المحاولة مرة أخرى."
            );
        }
    };


 <form>
                            <div className="flex justify-between gap-3 flex-col">
                                {/* Select SKU */}
                                <div className="my-3">
                                    <h1>Pen 1</h1>
                                    <div className='flex flex-row items-center gap-5'>
                                        <label className="block text-sm font-medium mb-1">
                                            {language === "EN" ? "SKU" : "المنتج"}
                                        </label>
                                        <select
                                            name="meter_product_pair"
                                            value={filters.meter_product_pair[0] || ""}
                                            onChange={(e) => handleChange(e, 0)} // Pen 1
                                            className="w-full border border-gray-300 rounded p-2"
                                            required
                                        >
                                            <option value="">{language === "EN" ? "Select Meter-Product" : "اختر العداد-المنتج"}</option>
                                            {meters.map((meter) => (
                                                <option key={meter.id} value={`${meter.id}-${filters.product}`}>
                                                    {language === "EN" ? meter.custom_name : meter.arabic_name}
                                                </option>
                                            ))}
                                        </select>


                                        {/* <label className="block text-sm font-medium mb-1">
                                        {language === "EN" ? "Meter" : "العداد"}
                                    </label>
                                    <select
                                        name="meter"
                                        value={filters.meter}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded p-2"
                                        required
                                    >
                                        <option value="">{language === "EN" ? "Select Meter" : "اختر العداد"}</option>
                                        {meters.map((meter) => (
                                            <option key={meter.id} value={meter.id}>
                                                {language === "EN" ? meter.custom_name : meter.arabic_name}
                                            </option>
                                        ))}
                                    </select> */}
                                    </div>
                                </div>
                                {/* <div className="my-3">
                                    <h1>Pen 2</h1>
                                    <div className='flex flex-row items-center gap-5'>
                                    <label className="block text-sm font-medium mb-1">
                                        {language === "EN" ? "SKU" : "المنتج"}
                                    </label>
                                    <select
                                        name="product" // Use dot notation for nested keys
                                        value={filters.product || ""} // Ensure a default value
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded p-2"
                                        required
                                    >
                                        <option value="">{language === "EN" ? "Select SKU" : "اختر المنتج"}</option>
                                        {products.map((sku) => (
                                            <option key={sku.id} value={sku.id}>
                                                {language === "EN" ? sku.name : sku.arabic_name}
                                            </option>
                                        ))}
                                    </select>

                                    <label className="block text-sm font-medium mb-1">
                                        {language === "EN" ? "Meter" : "العداد"}
                                    </label>
                                    <select
                                        name="meter"
                                        value={filters.meter}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded p-2"
                                        required
                                    >
                                        <option value="">{language === "EN" ? "Select Meter" : "اختر العداد"}</option>
                                        {meters.map((meter) => (
                                            <option key={meter.id} value={meter.id}>
                                                {language === "EN" ? meter.custom_name : meter.arabic_name}
                                            </option>
                                        ))}
                                    </select>
                                    </div>
                                </div>
                                <div className="my-3">
                                    <h1>Pen 3</h1>
                                    <div className='flex flex-row items-center gap-5'>
                                    <label className="block text-sm font-medium mb-1">
                                        {language === "EN" ? "SKU" : "المنتج"}
                                    </label>
                                    <select
                                        name="product" // Use dot notation for nested keys
                                        value={filters.product || ""} // Ensure a default value
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded p-2"
                                        required
                                    >
                                        <option value="" className='text-sm'>{language === "EN" ? "Select SKU" : "اختر المنتج"}</option>
                                        {products.map((sku) => (
                                            <option key={sku.id} value={sku.id}>
                                                {language === "EN" ? sku.name : sku.arabic_name}
                                            </option>
                                        ))}
                                    </select>

                                    <label className="block text-sm font-medium mb-1">
                                        {language === "EN" ? "Meter" : "العداد"}
                                    </label>
                                    <select
                                        name="meter"
                                        value={filters.meter}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded p-2"
                                        required
                                    >
                                        <option value="">{language === "EN" ? "Select Meter" : "اختر العداد"}</option>
                                        {meters.map((meter) => (
                                            <option key={meter.id} value={meter.id}>
                                                {language === "EN" ? meter.custom_name : meter.arabic_name}
                                            </option>
                                        ))}
                                    </select>
                                    </div>
                                </div> */}
                                {/* <div className="mt-4">
                                    <h1>Pen 2</h1>
                                    <label className="block text-sm font-medium mb-1">
                                        {language === "EN" ? "SKU" : "المنتج"}
                                    </label>
                                    <select
                                        name="product"
                                        value={filters.pen2.product}
                                        onChange={(e) => handleChange(e, 'pen2')}
                                        className="w-full border border-gray-300 rounded p-2"
                                        required
                                    >
                                        <option value="">{language === "EN" ? "Select SKU" : "اختر المنتج"}</option>
                                        {products.map((sku) => (
                                            <option key={sku.id} value={sku.id}>
                                                {language === "EN" ? sku.name : sku.arabic_name}
                                            </option>
                                        ))}
                                    </select>
                                    <label className="block text-sm font-medium mb-1">
                                        {language === "EN" ? "Meter" : "العداد"}
                                    </label>
                                    <select
                                        name="meter"
                                        value={filters.pen2.meter}
                                        onChange={(e) => handleChange(e, 'pen2')}
                                        className="w-full border border-gray-300 rounded p-2"
                                        required
                                    >
                                        <option value="">{language === "EN" ? "Select Meter" : "اختر العداد"}</option>
                                        {meters.map((meter) => (
                                            <option key={meter.id} value={meter.id}>
                                                {language === "EN" ? meter.custom_name : meter.arabic_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mt-4">
                                    <h1>Pen 3</h1>
                                    <label className="block text-sm font-medium mb-1">
                                        {language === "EN" ? "SKU" : "المنتج"}
                                    </label>
                                    <select
                                        name="product"
                                        value={filters.pen3.product}
                                        onChange={(e) => handleChange(e, 'pen3')}
                                        className="w-full border border-gray-300 rounded p-2"
                                        required
                                    >
                                        <option value="">{language === "EN" ? "Select SKU" : "اختر المنتج"}</option>
                                        {products.map((sku) => (
                                            <option key={sku.id} value={sku.id}>
                                                {language === "EN" ? sku.name : sku.arabic_name}
                                            </option>
                                        ))}
                                    </select>
                                    <label className="block text-sm font-medium mb-1">
                                        {language === "EN" ? "Meter" : "العداد"}
                                    </label>
                                    <select
                                        name="meter"
                                        value={filters.pen3.meter}
                                        onChange={(e) => handleChange(e, 'pen3')}
                                        className="w-full border border-gray-300 rounded p-2"
                                        required
                                    >
                                        <option value="">{language === "EN" ? "Select Meter" : "اختر العداد"}</option>
                                        {meters.map((meter) => (
                                            <option key={meter.id} value={meter.id}>
                                                {language === "EN" ? meter.custom_name : meter.arabic_name}
                                            </option>
                                        ))}
                                    </select>
                                </div> */}
                            </div>

                            <div className="flex justify-end mt-4">
                                <button type="button" onClick={fetchData} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                    {language === "EN" ? "Filter" : "فلتر"}
                                </button>
                            </div>
                        </form>