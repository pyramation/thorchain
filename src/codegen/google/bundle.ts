import * as _96 from "./api/annotations";
import * as _97 from "./api/auth";
import * as _98 from "./api/backend";
import * as _99 from "./api/billing";
import * as _100 from "./api/client";
import * as _101 from "./api/config_change";
import * as _102 from "./api/consumer";
import * as _103 from "./api/context";
import * as _104 from "./api/control";
import * as _105 from "./api/distribution";
import * as _106 from "./api/documentation";
import * as _107 from "./api/endpoint";
import * as _108 from "./api/error_reason";
import * as _109 from "./api/field_behavior";
import * as _110 from "./api/http";
import * as _111 from "./api/httpbody";
import * as _112 from "./api/label";
import * as _113 from "./api/launch_stage";
import * as _114 from "./api/log";
import * as _115 from "./api/logging";
import * as _116 from "./api/metric";
import * as _117 from "./api/monitored_resource";
import * as _118 from "./api/monitoring";
import * as _119 from "./api/quota";
import * as _120 from "./api/resource";
import * as _121 from "./api/routing";
import * as _122 from "./api/service";
import * as _123 from "./api/source_info";
import * as _124 from "./api/system_parameter";
import * as _125 from "./api/usage";
import * as _126 from "./api/visibility";
import * as _127 from "./logging/type/http_request";
import * as _128 from "./logging/type/log_severity";
import * as _129 from "./logging/v2/log_entry";
import * as _130 from "./logging/v2/logging_config";
import * as _131 from "./logging/v2/logging_metrics";
import * as _132 from "./logging/v2/logging";
import * as _133 from "./longrunning/operations";
import * as _134 from "./protobuf/any";
import * as _135 from "./protobuf/api";
import * as _136 from "./protobuf/descriptor";
import * as _137 from "./protobuf/duration";
import * as _138 from "./protobuf/empty";
import * as _139 from "./protobuf/field_mask";
import * as _140 from "./protobuf/source_context";
import * as _141 from "./protobuf/struct";
import * as _142 from "./protobuf/timestamp";
import * as _143 from "./protobuf/type";
import * as _144 from "./protobuf/wrappers";
import * as _145 from "./rpc/code";
import * as _146 from "./rpc/error_details";
import * as _147 from "./rpc/status";
export namespace google {
  export const api = { ..._96,
    ..._97,
    ..._98,
    ..._99,
    ..._100,
    ..._101,
    ..._102,
    ..._103,
    ..._104,
    ..._105,
    ..._106,
    ..._107,
    ..._108,
    ..._109,
    ..._110,
    ..._111,
    ..._112,
    ..._113,
    ..._114,
    ..._115,
    ..._116,
    ..._117,
    ..._118,
    ..._119,
    ..._120,
    ..._121,
    ..._122,
    ..._123,
    ..._124,
    ..._125,
    ..._126
  };
  export namespace logging {
    export const type = { ..._127,
      ..._128
    };
    export const v2 = { ..._129,
      ..._130,
      ..._131,
      ..._132
    };
  }
  export const longrunning = { ..._133
  };
  export const protobuf = { ..._134,
    ..._135,
    ..._136,
    ..._137,
    ..._138,
    ..._139,
    ..._140,
    ..._141,
    ..._142,
    ..._143,
    ..._144
  };
  export const rpc = { ..._145,
    ..._146,
    ..._147
  };
}