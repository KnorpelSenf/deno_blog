function delay(ms, options = {}) {
    const { signal  } = options;
    if (signal?.aborted) {
        return Promise.reject(new DOMException("Delay was aborted.", "AbortError"));
    }
    return new Promise((resolve, reject)=>{
        const abort = ()=>{
            clearTimeout(i);
            reject(new DOMException("Delay was aborted.", "AbortError"));
        };
        const done = ()=>{
            signal?.removeEventListener("abort", abort);
            resolve();
        };
        const i = setTimeout(done, ms);
        signal?.addEventListener("abort", abort, {
            once: true
        });
    });
}
const { Deno: Deno1  } = globalThis;
const noColor = typeof Deno1?.noColor === "boolean" ? Deno1.noColor : true;
let enabled = !noColor;
function code(open, close) {
    return {
        open: `\x1b[${open.join(";")}m`,
        close: `\x1b[${close}m`,
        regexp: new RegExp(`\\x1b\\[${close}m`, "g")
    };
}
function run(str, code) {
    return enabled ? `${code.open}${str.replace(code.regexp, code.open)}${code.close}` : str;
}
function yellow(str) {
    return run(str, code([
        33
    ], 39));
}
new RegExp([
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))", 
].join("|"), "g");
var Status;
(function(Status) {
    Status[Status["Continue"] = 100] = "Continue";
    Status[Status["SwitchingProtocols"] = 101] = "SwitchingProtocols";
    Status[Status["Processing"] = 102] = "Processing";
    Status[Status["EarlyHints"] = 103] = "EarlyHints";
    Status[Status["OK"] = 200] = "OK";
    Status[Status["Created"] = 201] = "Created";
    Status[Status["Accepted"] = 202] = "Accepted";
    Status[Status["NonAuthoritativeInfo"] = 203] = "NonAuthoritativeInfo";
    Status[Status["NoContent"] = 204] = "NoContent";
    Status[Status["ResetContent"] = 205] = "ResetContent";
    Status[Status["PartialContent"] = 206] = "PartialContent";
    Status[Status["MultiStatus"] = 207] = "MultiStatus";
    Status[Status["AlreadyReported"] = 208] = "AlreadyReported";
    Status[Status["IMUsed"] = 226] = "IMUsed";
    Status[Status["MultipleChoices"] = 300] = "MultipleChoices";
    Status[Status["MovedPermanently"] = 301] = "MovedPermanently";
    Status[Status["Found"] = 302] = "Found";
    Status[Status["SeeOther"] = 303] = "SeeOther";
    Status[Status["NotModified"] = 304] = "NotModified";
    Status[Status["UseProxy"] = 305] = "UseProxy";
    Status[Status["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    Status[Status["PermanentRedirect"] = 308] = "PermanentRedirect";
    Status[Status["BadRequest"] = 400] = "BadRequest";
    Status[Status["Unauthorized"] = 401] = "Unauthorized";
    Status[Status["PaymentRequired"] = 402] = "PaymentRequired";
    Status[Status["Forbidden"] = 403] = "Forbidden";
    Status[Status["NotFound"] = 404] = "NotFound";
    Status[Status["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    Status[Status["NotAcceptable"] = 406] = "NotAcceptable";
    Status[Status["ProxyAuthRequired"] = 407] = "ProxyAuthRequired";
    Status[Status["RequestTimeout"] = 408] = "RequestTimeout";
    Status[Status["Conflict"] = 409] = "Conflict";
    Status[Status["Gone"] = 410] = "Gone";
    Status[Status["LengthRequired"] = 411] = "LengthRequired";
    Status[Status["PreconditionFailed"] = 412] = "PreconditionFailed";
    Status[Status["RequestEntityTooLarge"] = 413] = "RequestEntityTooLarge";
    Status[Status["RequestURITooLong"] = 414] = "RequestURITooLong";
    Status[Status["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
    Status[Status["RequestedRangeNotSatisfiable"] = 416] = "RequestedRangeNotSatisfiable";
    Status[Status["ExpectationFailed"] = 417] = "ExpectationFailed";
    Status[Status["Teapot"] = 418] = "Teapot";
    Status[Status["MisdirectedRequest"] = 421] = "MisdirectedRequest";
    Status[Status["UnprocessableEntity"] = 422] = "UnprocessableEntity";
    Status[Status["Locked"] = 423] = "Locked";
    Status[Status["FailedDependency"] = 424] = "FailedDependency";
    Status[Status["TooEarly"] = 425] = "TooEarly";
    Status[Status["UpgradeRequired"] = 426] = "UpgradeRequired";
    Status[Status["PreconditionRequired"] = 428] = "PreconditionRequired";
    Status[Status["TooManyRequests"] = 429] = "TooManyRequests";
    Status[Status["RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
    Status[Status["UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
    Status[Status["InternalServerError"] = 500] = "InternalServerError";
    Status[Status["NotImplemented"] = 501] = "NotImplemented";
    Status[Status["BadGateway"] = 502] = "BadGateway";
    Status[Status["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    Status[Status["GatewayTimeout"] = 504] = "GatewayTimeout";
    Status[Status["HTTPVersionNotSupported"] = 505] = "HTTPVersionNotSupported";
    Status[Status["VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
    Status[Status["InsufficientStorage"] = 507] = "InsufficientStorage";
    Status[Status["LoopDetected"] = 508] = "LoopDetected";
    Status[Status["NotExtended"] = 510] = "NotExtended";
    Status[Status["NetworkAuthenticationRequired"] = 511] = "NetworkAuthenticationRequired";
})(Status || (Status = {}));
const STATUS_TEXT = new Map([
    [
        Status.Continue,
        "Continue"
    ],
    [
        Status.SwitchingProtocols,
        "Switching Protocols"
    ],
    [
        Status.Processing,
        "Processing"
    ],
    [
        Status.EarlyHints,
        "Early Hints"
    ],
    [
        Status.OK,
        "OK"
    ],
    [
        Status.Created,
        "Created"
    ],
    [
        Status.Accepted,
        "Accepted"
    ],
    [
        Status.NonAuthoritativeInfo,
        "Non-Authoritative Information"
    ],
    [
        Status.NoContent,
        "No Content"
    ],
    [
        Status.ResetContent,
        "Reset Content"
    ],
    [
        Status.PartialContent,
        "Partial Content"
    ],
    [
        Status.MultiStatus,
        "Multi-Status"
    ],
    [
        Status.AlreadyReported,
        "Already Reported"
    ],
    [
        Status.IMUsed,
        "IM Used"
    ],
    [
        Status.MultipleChoices,
        "Multiple Choices"
    ],
    [
        Status.MovedPermanently,
        "Moved Permanently"
    ],
    [
        Status.Found,
        "Found"
    ],
    [
        Status.SeeOther,
        "See Other"
    ],
    [
        Status.NotModified,
        "Not Modified"
    ],
    [
        Status.UseProxy,
        "Use Proxy"
    ],
    [
        Status.TemporaryRedirect,
        "Temporary Redirect"
    ],
    [
        Status.PermanentRedirect,
        "Permanent Redirect"
    ],
    [
        Status.BadRequest,
        "Bad Request"
    ],
    [
        Status.Unauthorized,
        "Unauthorized"
    ],
    [
        Status.PaymentRequired,
        "Payment Required"
    ],
    [
        Status.Forbidden,
        "Forbidden"
    ],
    [
        Status.NotFound,
        "Not Found"
    ],
    [
        Status.MethodNotAllowed,
        "Method Not Allowed"
    ],
    [
        Status.NotAcceptable,
        "Not Acceptable"
    ],
    [
        Status.ProxyAuthRequired,
        "Proxy Authentication Required"
    ],
    [
        Status.RequestTimeout,
        "Request Timeout"
    ],
    [
        Status.Conflict,
        "Conflict"
    ],
    [
        Status.Gone,
        "Gone"
    ],
    [
        Status.LengthRequired,
        "Length Required"
    ],
    [
        Status.PreconditionFailed,
        "Precondition Failed"
    ],
    [
        Status.RequestEntityTooLarge,
        "Request Entity Too Large"
    ],
    [
        Status.RequestURITooLong,
        "Request URI Too Long"
    ],
    [
        Status.UnsupportedMediaType,
        "Unsupported Media Type"
    ],
    [
        Status.RequestedRangeNotSatisfiable,
        "Requested Range Not Satisfiable"
    ],
    [
        Status.ExpectationFailed,
        "Expectation Failed"
    ],
    [
        Status.Teapot,
        "I'm a teapot"
    ],
    [
        Status.MisdirectedRequest,
        "Misdirected Request"
    ],
    [
        Status.UnprocessableEntity,
        "Unprocessable Entity"
    ],
    [
        Status.Locked,
        "Locked"
    ],
    [
        Status.FailedDependency,
        "Failed Dependency"
    ],
    [
        Status.TooEarly,
        "Too Early"
    ],
    [
        Status.UpgradeRequired,
        "Upgrade Required"
    ],
    [
        Status.PreconditionRequired,
        "Precondition Required"
    ],
    [
        Status.TooManyRequests,
        "Too Many Requests"
    ],
    [
        Status.RequestHeaderFieldsTooLarge,
        "Request Header Fields Too Large"
    ],
    [
        Status.UnavailableForLegalReasons,
        "Unavailable For Legal Reasons"
    ],
    [
        Status.InternalServerError,
        "Internal Server Error"
    ],
    [
        Status.NotImplemented,
        "Not Implemented"
    ],
    [
        Status.BadGateway,
        "Bad Gateway"
    ],
    [
        Status.ServiceUnavailable,
        "Service Unavailable"
    ],
    [
        Status.GatewayTimeout,
        "Gateway Timeout"
    ],
    [
        Status.HTTPVersionNotSupported,
        "HTTP Version Not Supported"
    ],
    [
        Status.VariantAlsoNegotiates,
        "Variant Also Negotiates"
    ],
    [
        Status.InsufficientStorage,
        "Insufficient Storage"
    ],
    [
        Status.LoopDetected,
        "Loop Detected"
    ],
    [
        Status.NotExtended,
        "Not Extended"
    ],
    [
        Status.NetworkAuthenticationRequired,
        "Network Authentication Required"
    ], 
]);
const GA_TRACKING_ID = "GA_TRACKING_ID";
const GA_BATCH_ENDPOINT = "https://www.google-analytics.com/batch";
const encoder = new TextEncoder();
const batch = new Uint8Array(16_386);
const queue = [];
let uploading = false;
function createEnqueue(endpoint, log, warn) {
    async function upload() {
        while(queue.length){
            let count = 0;
            let length = 0;
            while(count < Math.min(queue.length, 20)){
                const payload = queue[count];
                if (length + payload.length > 16_386) {
                    break;
                }
                batch.set(payload, length);
                count += 1;
                length += payload.length;
            }
            const body = batch.subarray(0, length);
            try {
                const start = performance.now();
                const res = await fetch(endpoint, {
                    method: "POST",
                    body
                });
                const duration = performance.now() - start;
                if ((res.status !== 200 || duration >= 1_000) && warn) {
                    log(`batch uploaded ${count} items in ${duration}ms. Response: ${res.status} ${res.statusText}`);
                }
                queue.splice(0, count);
            } catch (err) {
                if (warn) {
                    log(`batch upload failed: ${err}`);
                }
                await delay(1_000);
            }
        }
        uploading = false;
    }
    return function enqueue(payload) {
        queue.push(payload);
        if (!uploading) {
            uploading = true;
            setTimeout(upload, 1_000);
        }
    };
}
function defaultLog(msg) {
    console.warn(`[ga] ${yellow("warn")}: ${msg}`);
}
async function toDigest(msg) {
    const buffer = await crypto.subtle.digest("SHA-1", encoder.encode(msg));
    return Array.from(new Uint8Array(buffer)).map((b)=>b.toString(16).padStart(2, "0")).join("");
}
function toPayload(message) {
    const entries = Object.entries(message).filter(([, v])=>v).map(([k, v])=>[
            k,
            String(v).slice(0, 2_048)
        ]);
    const params = new URLSearchParams(entries);
    const item = `${params.toString()}\n`;
    return encoder.encode(item);
}
function toException(status, statusText, error) {
    let exception;
    if (status >= 400) {
        exception = `${status} ${statusText}`;
        if (error != null) {
            exception += ` (${String(error)})`;
        }
    }
    return exception;
}
function createReporter(options = {}) {
    const { endpoint =GA_BATCH_ENDPOINT , filter =()=>true , id =Deno.env.get(GA_TRACKING_ID) , log =defaultLog , metaData =()=>undefined , warn =true ,  } = options;
    if (!id && warn) {
        log("GA_TRACKING_ID environment variable not set. Google Analytics reporting disabled.");
    }
    const enqueue = createEnqueue(endpoint, log, warn);
    return async function report(req, conn, res, start, error) {
        if (!id) {
            return;
        }
        if (!(res.ok || res.status >= 400)) {
            return;
        }
        if (!filter(req, res)) {
            return;
        }
        const duration = performance.now() - start;
        const status = res.status;
        const statusText = res.statusText || STATUS_TEXT.get(status) || `${status}`;
        const userAgent = req.headers.get("user-agent");
        const [ip] = ((req.headers.get("x-forwarded-for") ?? req.headers.get("cf-connecting-ip")) ?? conn.remoteAddr.hostname).split(/\s*,\s*/);
        const { documentTitle , campaignMedium , campaignSource  } = metaData(req, res) ?? {};
        const exception = toException(status, statusText, error);
        const hitType = exception != null ? "exception" : "pageview";
        const message = {
            v: 1,
            tid: id,
            t: hitType,
            cid: await toDigest(ip),
            uip: ip,
            dl: req.url,
            dt: documentTitle,
            dr: req.headers.get("referer"),
            cm: campaignMedium,
            cs: campaignSource,
            ua: userAgent,
            exd: exception,
            exf: exception != null,
            srt: duration,
            qt: uploading ? 0 : 1_000
        };
        const payload = toPayload(message);
        if (payload.length > 8_092) {
            if (warn) {
                log(`payload exceeds maximum size: ${JSON.stringify(message)}`);
            }
            return;
        }
        enqueue(payload);
    };
}
function createReportMiddleware(options = {}) {
    const { endpoint =GA_BATCH_ENDPOINT , filter =()=>true , id =Deno.env.get(GA_TRACKING_ID) , log =defaultLog , metaData =()=>undefined , warn =true ,  } = options;
    if (!id && warn) {
        log("GA_TRACKING_ID environment variable not set. Google Analytics reporting disabled.");
    }
    const enqueue = createEnqueue(endpoint, log, warn);
    return async function reporter(ctx, next) {
        if (!id || !filter(ctx)) {
            return next();
        }
        let error;
        const start = performance.now();
        try {
            await next();
        } catch (e) {
            error = e;
        } finally{
            const status = ctx.response.status;
            if (status >= 200 && status < 300 || status >= 400) {
                const duration = performance.now() - start;
                const statusText = STATUS_TEXT.get(status) ?? `${status}`;
                const ip = ctx.request.ip;
                const { documentTitle , campaignMedium , campaignSource  } = metaData(ctx) ?? {};
                const exception = toException(status, statusText, error);
                const hitType = exception != null ? "exception" : "pageview";
                const message = {
                    v: 1,
                    tid: id,
                    t: hitType,
                    cid: await toDigest(ip),
                    uip: ip,
                    dl: ctx.request.url.toString(),
                    dt: documentTitle,
                    dr: ctx.request.headers.get("referer"),
                    cm: campaignMedium,
                    cs: campaignSource,
                    ua: ctx.request.headers.get("user-agent"),
                    exd: exception,
                    exf: exception != null,
                    srt: duration,
                    qt: uploading ? 0 : 1_000
                };
                const payload = toPayload(message);
                if (payload.length <= 8_092) {
                    enqueue(payload);
                } else if (warn) {
                    log(`payload exceeds maximum size: ${JSON.stringify(message)}`);
                }
            }
        }
    };
}
export { createReporter as createReporter };
export { createReportMiddleware as createReportMiddleware };
