# Unexpected NaN in JavaScript Addition Function

This repository demonstrates a common JavaScript error related to handling undefined values in arithmetic operations. The `foo` function is designed to add two numbers but produces unexpected `NaN` when one of the inputs is `undefined`.

## Bug Description

The `foo` function incorrectly handles `undefined` arguments, leading to `NaN` results. The expected behavior is either to return `null` or to treat `undefined` values as 0.

## Solution

The solution addresses this by explicitly checking for `undefined` arguments and handling them appropriately.  The revised code treats `undefined` as 0 before performing the addition.