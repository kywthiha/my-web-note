 const res = await axiosInstance.post('/sap.svc/POST_SO', {
          list: [
            {
              hdr: {
                RefNo: sapRefNo,
                DocDate: sapSaleOrder.documentDate,
                DelDate: sapSaleOrder.requestedDeliveryDate,
                CardCode: customer.CardCode,
                Disc: +(sapSaleOrder.invoiceDiscount || 0),
                Comments: sapSaleOrder.remark || '',
                dtl: releaseSapSaleOrderDto.sapSaleOrderLines.map((item) => ({
                  ItemCode: item.Itm_Code,
                  WhsCode: item.WhsCode,
                  Qty: item.quantity,
                  Price: item.unitPrice,
                  LineTotal: item.lineAmount,
                  UomCode: item.UOM,
                })),
              },
            },
          ],
        });
