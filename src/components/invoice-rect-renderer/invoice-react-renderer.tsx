import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import styles from "./styles";

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>INVOICE</Text>
          <Text style={styles.subtitle}>Invoice #INV-2024-001</Text>
        </View>
        <View style={styles.companyInfo}>
          <Text style={styles.companyName}>Company Name</Text>
          <Text style={styles.companyAddress}>
            123 Business Street{"\n"}
            City, State 12345
          </Text>
        </View>
      </View>

      <View style={styles.billTo}>
        <Text style={styles.billToTitle}>Bill To:</Text>
        <Text style={styles.billToAddress}>
          Client Name{"\n"}
          Client Address{"\n"}
          City, State ZIP
        </Text>
      </View>

      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderCell}>Description</Text>
          <Text style={[styles.tableHeaderCell, styles.textRight]}>
            Quantity
          </Text>
          <Text style={[styles.tableHeaderCell, styles.textRight]}>
            Unit Price
          </Text>
          <Text style={[styles.tableHeaderCell, styles.textRight]}>Total</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Web Design Service</Text>
          <Text style={[styles.tableCell, styles.textRight]}>1</Text>
          <Text style={[styles.tableCell, styles.textRight]}>$1,500.00</Text>
          <Text style={[styles.tableCell, styles.textRight]}>$1,500.00</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Hosting Setup</Text>
          <Text style={[styles.tableCell, styles.textRight]}>1</Text>
          <Text style={[styles.tableCell, styles.textRight]}>$250.00</Text>
          <Text style={[styles.tableCell, styles.textRight]}>$250.00</Text>
        </View>
      </View>

      <View style={styles.totals}>
        <View style={styles.totalRow}>
          <Text>Subtotal:</Text>
          <Text>$1,750.00</Text>
        </View>
        <View style={styles.totalRow}>
          <Text>Tax (10%):</Text>
          <Text>$175.00</Text>
        </View>
        <View style={[styles.totalRow, styles.totalRowBold]}>
          <Text>Total:</Text>
          <Text>$1,925.00</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default function InvoiceRectRenderer() {
  return (
    <div>
      <PDFViewer
        width="595px"
        height="650px"
        showToolbar={false}
        style={{
          margin: "20px auto",
          display: "flex",
          border: "1px solid #ccc",
        }}
      >
        <MyDocument />
      </PDFViewer>
      <div style={{ marginBottom: "20px" }}>
        <PDFDownloadLink
          document={<MyDocument />}
          fileName="invoice.pdf"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {({ blob, url, loading, error }) =>
            loading
              ? "Loading document..."
              : error
              ? `Error: ${error.message}`
              : "Download Invoice"
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
}
