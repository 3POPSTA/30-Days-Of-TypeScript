// Day 7: Type Aliases & Intersection Types
// Run: npx tsx 07_Day_Type_aliases/type_aliases.ts

console.log("=== Day 7: Type Aliases & Intersection Types ===\n");

// 1. Composing domain models with intersections
type Identifiable = { readonly id: string };
type Timestamped = { readonly createdAt: string };
type AccountFields = { email: string; isVerified: boolean };

type AccountRecord = Identifiable & Timestamped & AccountFields;

const adminAccount: AccountRecord = {
    id: "acc_9001",
    createdAt: "2026-11-24T09:00:00Z",
    email: "ops@example.com",
    isVerified: true,
};
console.log("Intersected AccountRecord:", adminAccount, "\n");

// 2. Recursive type alias for tree hierarchies
type TreeNode = {
    readonly label: string;
    readonly children?: readonly TreeNode[];
};

function countTreeNodes(node: TreeNode): number {
    const childTotal = (node.children ?? []).reduce((sum, child) => sum + countTreeNodes(child), 0);
    return 1 + childTotal;
}

const projectTree: TreeNode = {
    label: "src",
    children: [
        { label: "core", children: [{ label: "engine.ts" }, { label: "types.ts" }] },
        { label: "cli.ts" },
    ],
};
console.log(`Tree "${projectTree.label}" total nodes:`, countTreeNodes(projectTree), "\n");

// 3. Branded primitive types via phantom intersections
type UserId = string & { readonly __brand: "UserId" };
type InvoiceId = string & { readonly __brand: "InvoiceId" };

const toUserId = (id: string): UserId => id as UserId;
const toInvoiceId = (id: string): InvoiceId => id as InvoiceId;

function chargeUserInvoice(user: UserId, invoice: InvoiceId): string {
    return `Charged invoice ${invoice} to user ${user}`;
}

const uid = toUserId("usr_42");
const inv = toInvoiceId("inv_880");
// chargeUserInvoice(inv, uid); // ❌ Compile Error: swapped branded IDs rejected!
console.log(chargeUserInvoice(uid, inv));

export {};
