import * as _m0 from "protobufjs/minimal";
/**
 * Logging configuration of the service.
 *
 * The following example shows how to configure logs to be sent to the
 * producer and consumer projects. In the example, the `activity_history`
 * log is sent to both the producer and consumer projects, whereas the
 * `purchase_history` log is only sent to the producer project.
 *
 *     monitored_resources:
 *     - type: library.googleapis.com/branch
 *       labels:
 *       - key: /city
 *         description: The city where the library branch is located in.
 *       - key: /name
 *         description: The name of the branch.
 *     logs:
 *     - name: activity_history
 *       labels:
 *       - key: /customer_id
 *     - name: purchase_history
 *     logging:
 *       producer_destinations:
 *       - monitored_resource: library.googleapis.com/branch
 *         logs:
 *         - activity_history
 *         - purchase_history
 *       consumer_destinations:
 *       - monitored_resource: library.googleapis.com/branch
 *         logs:
 *         - activity_history
 */
export interface Logging {
    /**
     * Logging configurations for sending logs to the producer project.
     * There can be multiple producer destinations, each one must have a
     * different monitored resource type. A log can be used in at most
     * one producer destination.
     */
    producerDestinations: Logging_LoggingDestination[];
    /**
     * Logging configurations for sending logs to the consumer project.
     * There can be multiple consumer destinations, each one must have a
     * different monitored resource type. A log can be used in at most
     * one consumer destination.
     */
    consumerDestinations: Logging_LoggingDestination[];
}
/**
 * Logging configuration of the service.
 *
 * The following example shows how to configure logs to be sent to the
 * producer and consumer projects. In the example, the `activity_history`
 * log is sent to both the producer and consumer projects, whereas the
 * `purchase_history` log is only sent to the producer project.
 *
 *     monitored_resources:
 *     - type: library.googleapis.com/branch
 *       labels:
 *       - key: /city
 *         description: The city where the library branch is located in.
 *       - key: /name
 *         description: The name of the branch.
 *     logs:
 *     - name: activity_history
 *       labels:
 *       - key: /customer_id
 *     - name: purchase_history
 *     logging:
 *       producer_destinations:
 *       - monitored_resource: library.googleapis.com/branch
 *         logs:
 *         - activity_history
 *         - purchase_history
 *       consumer_destinations:
 *       - monitored_resource: library.googleapis.com/branch
 *         logs:
 *         - activity_history
 */
export interface LoggingSDKType {
    producer_destinations: Logging_LoggingDestinationSDKType[];
    consumer_destinations: Logging_LoggingDestinationSDKType[];
}
/**
 * Configuration of a specific logging destination (the producer project
 * or the consumer project).
 */
export interface Logging_LoggingDestination {
    /**
     * The monitored resource type. The type must be defined in the
     * [Service.monitored_resources][google.api.Service.monitored_resources] section.
     */
    monitoredResource: string;
    /**
     * Names of the logs to be sent to this destination. Each name must
     * be defined in the [Service.logs][google.api.Service.logs] section. If the log name is
     * not a domain scoped name, it will be automatically prefixed with
     * the service name followed by "/".
     */
    logs: string[];
}
/**
 * Configuration of a specific logging destination (the producer project
 * or the consumer project).
 */
export interface Logging_LoggingDestinationSDKType {
    monitored_resource: string;
    logs: string[];
}
export declare const Logging: {
    encode(message: Logging, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Logging;
    fromJSON(object: any): Logging;
    toJSON(message: Logging): unknown;
    fromPartial(object: Partial<Logging>): Logging;
};
export declare const Logging_LoggingDestination: {
    encode(message: Logging_LoggingDestination, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Logging_LoggingDestination;
    fromJSON(object: any): Logging_LoggingDestination;
    toJSON(message: Logging_LoggingDestination): unknown;
    fromPartial(object: Partial<Logging_LoggingDestination>): Logging_LoggingDestination;
};
