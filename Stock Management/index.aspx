<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="Stock_Management.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Stock Management</title>
    <link href="MyStyleSheet.css" rel="stylesheet" />
    <script src="MyJavaScript.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div class="container">
             <div class="add_stock">
                    <h1>Add Stock</h1>
                 <table class="add_stock_table">
                     <tr>
                         <td>
                            <label>Product Name</label>
                         </td>
                         <td>
                             <asp:DropDownList ID="DropDownList1" CssClass="drpDL" runat="server">
                                 <asp:ListItem text="Select item..." value="0"></asp:ListItem>
                                 <asp:ListItem text="PRODUCT1" value="1"></asp:ListItem>
                                 <asp:ListItem text="PRODUCT2" value="2"></asp:ListItem>
                                 <asp:ListItem text="PRODUCT3" value="3"></asp:ListItem>
                             </asp:DropDownList>
                         </td>
                     </tr>
                      <tr>
                         <td>
                             <label>Quantity</label>
                         </td>
                         <td>
                             <asp:TextBox ID="QuantityTextBox" TextMode="Number" CssClass="qty_txtB" runat="server"></asp:TextBox>
                         </td>
                     </tr>

                      <tr>
                         <td>
                            <label>Price</label>
                         </td>
                         <td>
                             <asp:TextBox ID="PriceTextBox" TextMode="Number"  CssClass="priceTxtB" runat="server"></asp:TextBox>
                         </td>
                     </tr>

                     <tr>
                         <td colspan="2">
                             <input type="button" value="Add Product" onclick="newProduct()"/>
                         </td>
                     </tr>
                     
                 </table>
             </div>

            <div class="remove_stock">
                    <h1>Remove Stock</h1>
                
                
                <div id="productsList"></div>

                <table>
                    <tr>
                        <td> <label>Customer email</label></td>
                        <td>
                            <asp:TextBox ID="emailTxtB" TextMode="Email" runat="server"></asp:TextBox>

                        </td>
                    </tr>
                    <tr>
                        <td> <label>Product</label></td>
                        <td>
                            <asp:DropDownList ID="DropDownList2" CssClass="drpDL" runat="server">
                                 <asp:ListItem text="Select item..." value="0"></asp:ListItem>
                                 <asp:ListItem text="PRODUCT1" value="1"></asp:ListItem>
                                 <asp:ListItem text="PRODUCT2" value="2"></asp:ListItem>
                                 <asp:ListItem text="PRODUCT3" value="3"></asp:ListItem>
                             </asp:DropDownList>
                        </td>
                    </tr>
                    <tr>
                        <td> <label>Quantity</label></td>
                        <td>
                            <asp:TextBox ID="qtyTxtB2" TextMode="Number" CssClass="qty_txtB" runat="server"></asp:TextBox>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                             <input type="button" value="Sell Product" onclick="sellProduct()"/>
                        </td>
                    </tr>
                     <tr>
                        <td colspan="2">
                             <label id="removeResponse"></label>
                        </td>
                    </tr>
                </table>

             </div>

            <div class="stock_levels_and_Average_prices">
                 <h1>Stock Levels and Average Prices</h1>
                 <label id="prod1">PRODUCT1 :-  Quantity: 0   Price Average: R0.00 <br /></label>
                 <label id="prod2">PRODUCT2 :-  Quantity: 0   Price Average: R0.00 <br /></label>
                 <label id="prod3">PRODUCT3 :-  Quantity: 0   Price Average: R0.00</label>
            </div>

        </div>
    </form>
</body>
</html>
