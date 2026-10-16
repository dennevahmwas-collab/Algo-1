import React, { useState } from "react";

/**
 * Problem 1: Sum of distinct elements from two sets.
 * Approach (as instructed):
 *   sum = 0
 *   - Compare each element of Set1 with Set2 -> if NOT present, add to sum
 *   - Vice versa: each element of Set2 with Set1 -> if NOT present, add to sum
 */
function DistinctSum() {
  // State holds the two sets as ARRAYS
  const [set1, setSet1] = useState([3, 1, 7, 9]);
  const [set2, setSet2] = useState([2, 4, 1, 9, 3]);
  const [sum, setSum] = useState(null);

  // Convert an input string "3,1,7" into a numeric array
  const toArray = (str) =>
    str
      .split(",")
      .map((x) => x.trim())
      .filter((x) => x !== "")
      .map(Number);

  // Core algorithm — array based, with nested comparison loops
  const sumOfDistinct = (a, b) => {
    let total = 0;

    // Step 1: elements in 'a' NOT in 'b'
    for (let i = 0; i < a.length; i++) {
      let found = false;
      for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j]) found = true;
      }
      if (!found) total += a[i];
    }

    // Step 2 (vice versa): elements in 'b' NOT in 'a'
    for (let i = 0; i < b.length; i++) {
      let found = false;
      for (let j = 0; j < a.length; j++) {
        if (b[i] === a[j]) found = true;
      }
      if (!found) total += b[i];
    }

    return total;
  };

  const handleCompute = () => setSum(sumOfDistinct(set1, set2));

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 16,
        marginBottom: 24,
      }}
    >
      <h2>Problem 1 — Sum of Distinct Elements</h2>

      <div style={{ marginBottom: 8 }}>
        <label>
          Set 1:{" "}
          <input
            value={set1.join(", ")}
            onChange={(e) => setSet1(toArray(e.target.value))}
          />
        </label>
      </div>

      <div style={{ marginBottom: 8 }}>
        <label>
          Set 2:{" "}
          <input
            value={set2.join(", ")}
            onChange={(e) => setSet2(toArray(e.target.value))}
          />
        </label>
      </div>

      <button onClick={handleCompute}>Compute Sum</button>

      {sum !== null && (
        <p style={{ marginTop: 12, fontWeight: "bold" }}>
          Sum of distinct elements = {sum}
        </p>
      )}
    </div>
  );
}

export default DistinctSum;
