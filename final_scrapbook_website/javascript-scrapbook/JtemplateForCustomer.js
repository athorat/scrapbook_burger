function loadCustomerDetails(){
	 var deal = {
                dealNO: 'deal_cmf_8010 ',
                trackNo: 'deal-1x08#11$0',
                category: 'XYZ',
                title: 'Bo Bunny - Souvenir Collection - 12 x 12 Cardstock Stickers - Combo',
                imgSrc: 'images2/ql11.jpg'
            };
            var html =$('#comfirmationTemplate').html();
		
            // $(#result).setTemplate("{$T.dealNo}");
            $("#resultDiv").html('<span>Loading.........</span>');
		//	alert("Loading.............");
		//	alert("dealNO:"+deal.dealNO);
            $("#resultDiv").setTemplate(html);

            $("#resultDiv").processTemplate(deal);
}