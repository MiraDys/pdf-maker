import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937",
  },
  subtitle: {
    fontSize: 12,
    color: "#4b5563",
  },
  companyInfo: {
    textAlign: "right",
  },
  companyName: {
    fontWeight: "bold",
  },
  companyAddress: {
    fontSize: 12,
    color: "#4b5563",
  },
  billTo: {
    marginBottom: 30,
  },
  billToTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  billToAddress: {
    color: "#374151",
  },
  table: {
    marginBottom: 30,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f3f4f6",
    padding: 8,
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
  },
  tableHeaderCell: {
    flex: 1,
    fontWeight: "bold",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
    padding: 8,
  },
  tableCell: {
    flex: 1,
  },
  textRight: {
    textAlign: "right",
  },
  totals: {
    width: "40%",
    alignSelf: "flex-end",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  totalRowBold: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
