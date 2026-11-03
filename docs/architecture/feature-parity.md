# Web and mobile feature parity

The website and mobile app are separate interfaces over the same product. A feature is not complete until the core journey works on both.

| Capability                             | Web      | Mobile   | Same underlying behavior                                   |
| -------------------------------------- | -------- | -------- | ---------------------------------------------------------- |
| Explore and search fishing locations   | Required | Required | Same coverage, filters, evidence, and statuses             |
| Inspect fishability, access, and rules | Required | Required | Same assessment service and source versions                |
| Plan and save a trip                   | Required | Required | Same trip data and validation                              |
| Ask general fishing questions          | Required | Required | Same AI service, fishing knowledge, and uncertainty policy |
| Get contextual on-the-water advice     | Required | Required | Same trip context and recommendation logic                 |
| Share or synchronize trip state        | Required | Required | Same account and API-owned state                           |

The UI may adapt to screen size and input method. Native GPS, camera, or device storage are platform conveniences, not alternate sources of legal truth. For identical inputs and dataset versions, legal and access assessments must be identical across clients.

Offline support is not part of the current foundation. Before promising it on both platforms, define the exact offline capabilities and the browser-storage limitations. A cached assessment must show its source version and age; offline data must never silently imply that no newer closure exists.
