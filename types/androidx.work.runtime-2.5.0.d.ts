/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */

declare module androidx {
  export module inspection {
    export module work {
      export module runtime {
        export class ProguardDetection {
          public static class: java.lang.Class<androidx.inspection.work.runtime.ProguardDetection>;
          public constructor();
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export class ArrayCreatingInputMerger extends androidx.work.InputMerger {
      public static class: java.lang.Class<androidx.work.ArrayCreatingInputMerger>;
      public merge(param0: java.util.List<androidx.work.Data>): androidx.work.Data;
      public constructor();
    }
  }
}

declare module androidx {
  export module work {
    export class BackoffPolicy {
      public static class: java.lang.Class<androidx.work.BackoffPolicy>;
      public static EXPONENTIAL: androidx.work.BackoffPolicy;
      public static LINEAR: androidx.work.BackoffPolicy;
      public static values(): native.Array<androidx.work.BackoffPolicy>;
      public static valueOf(param0: string): androidx.work.BackoffPolicy;
    }
  }
}

declare module androidx {
  export module work {
    export class Configuration {
      public static class: java.lang.Class<androidx.work.Configuration>;
      public static MIN_SCHEDULER_LIMIT: number;
      public getWorkerFactory(): androidx.work.WorkerFactory;
      public getDefaultProcessName(): string;
      public getInputMergerFactory(): androidx.work.InputMergerFactory;
      public getMinimumLoggingLevel(): number;
      public getMaxJobSchedulerId(): number;
      public getMaxSchedulerLimit(): number;
      public getMinJobSchedulerId(): number;
      public isUsingDefaultTaskExecutor(): boolean;
      public getExecutor(): java.util.concurrent.Executor;
      public getRunnableScheduler(): androidx.work.RunnableScheduler;
      public getTaskExecutor(): java.util.concurrent.Executor;
      public getExceptionHandler(): androidx.work.InitializationExceptionHandler;
    }
    export module Configuration {
      export class Builder {
        public static class: java.lang.Class<androidx.work.Configuration.Builder>;
        public setExecutor(param0: java.util.concurrent.Executor): androidx.work.Configuration.Builder;
        public setMinimumLoggingLevel(param0: number): androidx.work.Configuration.Builder;
        public setInputMergerFactory(param0: androidx.work.InputMergerFactory): androidx.work.Configuration.Builder;
        public constructor(param0: androidx.work.Configuration);
        public setJobSchedulerJobIdRange(param0: number, param1: number): androidx.work.Configuration.Builder;
        public setMaxSchedulerLimit(param0: number): androidx.work.Configuration.Builder;
        public setRunnableScheduler(param0: androidx.work.RunnableScheduler): androidx.work.Configuration.Builder;
        public setDefaultProcessName(param0: string): androidx.work.Configuration.Builder;
        public constructor();
        public setInitializationExceptionHandler(param0: androidx.work.InitializationExceptionHandler): androidx.work.Configuration.Builder;
        public setWorkerFactory(param0: androidx.work.WorkerFactory): androidx.work.Configuration.Builder;
        public setTaskExecutor(param0: java.util.concurrent.Executor): androidx.work.Configuration.Builder;
        public build(): androidx.work.Configuration;
      }
      export class Provider {
        public static class: java.lang.Class<androidx.work.Configuration.Provider>;
        /**
         * Constructs a new instance of the androidx.work.Configuration$Provider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          getWorkManagerConfiguration(): androidx.work.Configuration;
        });
        public constructor();
        public getWorkManagerConfiguration(): androidx.work.Configuration;
      }
    }
  }
}

declare module androidx {
  export module work {
    export class Constraints {
      public static class: java.lang.Class<androidx.work.Constraints>;
      public static NONE: androidx.work.Constraints;
      public setRequiresStorageNotLow(param0: boolean): void;
      public equals(param0: any): boolean;
      public setTriggerContentUpdateDelay(param0: number): void;
      public hasContentUriTriggers(): boolean;
      public setRequiresDeviceIdle(param0: boolean): void;
      public getTriggerMaxContentDelay(): number;
      public setRequiresCharging(param0: boolean): void;
      public setTriggerMaxContentDelay(param0: number): void;
      public constructor();
      public requiresBatteryNotLow(): boolean;
      public requiresCharging(): boolean;
      public getRequiredNetworkType(): androidx.work.NetworkType;
      public requiresDeviceIdle(): boolean;
      public getContentUriTriggers(): androidx.work.ContentUriTriggers;
      public setRequiresBatteryNotLow(param0: boolean): void;
      public requiresStorageNotLow(): boolean;
      public setRequiredNetworkType(param0: androidx.work.NetworkType): void;
      public constructor(param0: androidx.work.Constraints);
      public getTriggerContentUpdateDelay(): number;
      public setContentUriTriggers(param0: androidx.work.ContentUriTriggers): void;
      public hashCode(): number;
    }
    export module Constraints {
      export class Builder {
        public static class: java.lang.Class<androidx.work.Constraints.Builder>;
        public setRequiresBatteryNotLow(param0: boolean): androidx.work.Constraints.Builder;
        public addContentUriTrigger(param0: globalAndroid.net.Uri, param1: boolean): androidx.work.Constraints.Builder;
        public setTriggerContentMaxDelay(param0: java.time.Duration): androidx.work.Constraints.Builder;
        public setRequiresCharging(param0: boolean): androidx.work.Constraints.Builder;
        public setRequiredNetworkType(param0: androidx.work.NetworkType): androidx.work.Constraints.Builder;
        public setRequiresDeviceIdle(param0: boolean): androidx.work.Constraints.Builder;
        public setTriggerContentMaxDelay(param0: number, param1: java.util.concurrent.TimeUnit): androidx.work.Constraints.Builder;
        public setTriggerContentUpdateDelay(param0: java.time.Duration): androidx.work.Constraints.Builder;
        public setRequiresStorageNotLow(param0: boolean): androidx.work.Constraints.Builder;
        public build(): androidx.work.Constraints;
        public constructor();
        public setTriggerContentUpdateDelay(param0: number, param1: java.util.concurrent.TimeUnit): androidx.work.Constraints.Builder;
      }
    }
  }
}

declare module androidx {
  export module work {
    export class ContentUriTriggers {
      public static class: java.lang.Class<androidx.work.ContentUriTriggers>;
      public equals(param0: any): boolean;
      public getTriggers(): java.util.Set<androidx.work.ContentUriTriggers.Trigger>;
      public size(): number;
      public constructor();
      public add(param0: globalAndroid.net.Uri, param1: boolean): void;
      public hashCode(): number;
    }
    export module ContentUriTriggers {
      export class Trigger {
        public static class: java.lang.Class<androidx.work.ContentUriTriggers.Trigger>;
        public getUri(): globalAndroid.net.Uri;
        public hashCode(): number;
        public equals(param0: any): boolean;
        public shouldTriggerForDescendants(): boolean;
      }
    }
  }
}

declare module androidx {
  export module work {
    export class Data {
      public static class: java.lang.Class<androidx.work.Data>;
      public static EMPTY: androidx.work.Data;
      public static MAX_DATA_BYTES: number;
      public equals(param0: any): boolean;
      public getDoubleArray(param0: string): native.Array<number>;
      public getInt(param0: string, param1: number): number;
      public toByteArray(): native.Array<number>;
      public size(): number;
      public getFloat(param0: string, param1: number): number;
      public getLongArray(param0: string): native.Array<number>;
      public getLong(param0: string, param1: number): number;
      public getString(param0: string): string;
      public getKeyValueMap(): java.util.Map<string, any>;
      public getByteArray(param0: string): native.Array<number>;
      public getIntArray(param0: string): native.Array<number>;
      public getByte(param0: string, param1: number): number;
      public constructor(param0: androidx.work.Data);
      public getDouble(param0: string, param1: number): number;
      public toString(): string;
      public hasKeyWithValueOfType(param0: string, param1: java.lang.Class): boolean;
      public getBooleanArray(param0: string): native.Array<boolean>;
      public static fromByteArray(param0: native.Array<number>): androidx.work.Data;
      public getBoolean(param0: string, param1: boolean): boolean;
      public static toByteArrayInternal(param0: androidx.work.Data): native.Array<number>;
      public getFloatArray(param0: string): native.Array<number>;
      public getStringArray(param0: string): native.Array<string>;
      public hashCode(): number;
    }
    export module Data {
      export class Builder {
        public static class: java.lang.Class<androidx.work.Data.Builder>;
        public putFloat(param0: string, param1: number): androidx.work.Data.Builder;
        public putAll(param0: java.util.Map<string, any>): androidx.work.Data.Builder;
        public putLongArray(param0: string, param1: native.Array<number>): androidx.work.Data.Builder;
        public putDoubleArray(param0: string, param1: native.Array<number>): androidx.work.Data.Builder;
        public putByte(param0: string, param1: number): androidx.work.Data.Builder;
        public putAll(param0: androidx.work.Data): androidx.work.Data.Builder;
        public putBooleanArray(param0: string, param1: native.Array<boolean>): androidx.work.Data.Builder;
        public putString(param0: string, param1: string): androidx.work.Data.Builder;
        public put(param0: string, param1: any): androidx.work.Data.Builder;
        public putFloatArray(param0: string, param1: native.Array<number>): androidx.work.Data.Builder;
        public constructor();
        public putLong(param0: string, param1: number): androidx.work.Data.Builder;
        public putBoolean(param0: string, param1: boolean): androidx.work.Data.Builder;
        public putIntArray(param0: string, param1: native.Array<number>): androidx.work.Data.Builder;
        public putDouble(param0: string, param1: number): androidx.work.Data.Builder;
        public putStringArray(param0: string, param1: native.Array<string>): androidx.work.Data.Builder;
        public putInt(param0: string, param1: number): androidx.work.Data.Builder;
        public putByteArray(param0: string, param1: native.Array<number>): androidx.work.Data.Builder;
        public build(): androidx.work.Data;
      }
    }
  }
}

declare module androidx {
  export module work {
    export class DelegatingWorkerFactory extends androidx.work.WorkerFactory {
      public static class: java.lang.Class<androidx.work.DelegatingWorkerFactory>;
      public createWorker(param0: globalAndroid.content.Context, param1: string, param2: androidx.work.WorkerParameters): androidx.work.ListenableWorker;
      public addFactory(param0: androidx.work.WorkerFactory): void;
      public constructor();
    }
  }
}

declare module androidx {
  export module work {
    export class ExistingPeriodicWorkPolicy {
      public static class: java.lang.Class<androidx.work.ExistingPeriodicWorkPolicy>;
      public static REPLACE: androidx.work.ExistingPeriodicWorkPolicy;
      public static KEEP: androidx.work.ExistingPeriodicWorkPolicy;
      public static values(): native.Array<androidx.work.ExistingPeriodicWorkPolicy>;
      public static valueOf(param0: string): androidx.work.ExistingPeriodicWorkPolicy;
    }
  }
}

declare module androidx {
  export module work {
    export class ExistingWorkPolicy {
      public static class: java.lang.Class<androidx.work.ExistingWorkPolicy>;
      public static REPLACE: androidx.work.ExistingWorkPolicy;
      public static KEEP: androidx.work.ExistingWorkPolicy;
      public static APPEND: androidx.work.ExistingWorkPolicy;
      public static APPEND_OR_REPLACE: androidx.work.ExistingWorkPolicy;
      public static values(): native.Array<androidx.work.ExistingWorkPolicy>;
      public static valueOf(param0: string): androidx.work.ExistingWorkPolicy;
    }
  }
}

declare module androidx {
  export module work {
    export class ForegroundInfo {
      public static class: java.lang.Class<androidx.work.ForegroundInfo>;
      public constructor(param0: number, param1: globalAndroid.app.Notification);
      public getNotification(): globalAndroid.app.Notification;
      public equals(param0: any): boolean;
      public toString(): string;
      public getNotificationId(): number;
      public constructor(param0: number, param1: globalAndroid.app.Notification, param2: number);
      public getForegroundServiceType(): number;
      public hashCode(): number;
    }
  }
}

declare module androidx {
  export module work {
    export class ForegroundUpdater {
      public static class: java.lang.Class<androidx.work.ForegroundUpdater>;
      /**
       * Constructs a new instance of the androidx.work.ForegroundUpdater interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: {
        setForegroundAsync(param0: globalAndroid.content.Context, param1: java.util.UUID, param2: androidx.work.ForegroundInfo): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
      });
      public constructor();
      public setForegroundAsync(param0: globalAndroid.content.Context, param1: java.util.UUID, param2: androidx.work.ForegroundInfo): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
    }
  }
}

declare module androidx {
  export module work {
    export class InitializationExceptionHandler {
      public static class: java.lang.Class<androidx.work.InitializationExceptionHandler>;
      /**
       * Constructs a new instance of the androidx.work.InitializationExceptionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: {
        handleException(param0: java.lang.Throwable): void;
      });
      public constructor();
      public handleException(param0: java.lang.Throwable): void;
    }
  }
}

declare module androidx {
  export module work {
    export abstract class InputMerger {
      public static class: java.lang.Class<androidx.work.InputMerger>;
      public merge(param0: java.util.List<androidx.work.Data>): androidx.work.Data;
      public static fromClassName(param0: string): androidx.work.InputMerger;
      public constructor();
    }
  }
}

declare module androidx {
  export module work {
    export abstract class InputMergerFactory {
      public static class: java.lang.Class<androidx.work.InputMergerFactory>;
      public createInputMerger(param0: string): androidx.work.InputMerger;
      public static getDefaultInputMergerFactory(): androidx.work.InputMergerFactory;
      public constructor();
      public createInputMergerWithDefaultFallback(param0: string): androidx.work.InputMerger;
    }
  }
}

declare module androidx {
  export module work {
    export abstract class ListenableWorker {
      public static class: java.lang.Class<androidx.work.ListenableWorker>;
      public getTriggeredContentUris(): java.util.List<globalAndroid.net.Uri>;
      public startWork(): com.google.common.util.concurrent.ListenableFuture<androidx.work.ListenableWorker.Result>;
      public isUsed(): boolean;
      public getRunAttemptCount(): number;
      public onStopped(): void;
      public getTags(): java.util.Set<string>;
      public setForegroundAsync(param0: androidx.work.ForegroundInfo): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
      public getApplicationContext(): globalAndroid.content.Context;
      public isStopped(): boolean;
      public isRunInForeground(): boolean;
      public getWorkerFactory(): androidx.work.WorkerFactory;
      public getInputData(): androidx.work.Data;
      public setUsed(): void;
      public getNetwork(): globalAndroid.net.Network;
      public constructor(param0: globalAndroid.content.Context, param1: androidx.work.WorkerParameters);
      public getTriggeredContentAuthorities(): java.util.List<string>;
      public stop(): void;
      public getBackgroundExecutor(): java.util.concurrent.Executor;
      public getTaskExecutor(): androidx.work.impl.utils.taskexecutor.TaskExecutor;
      public setProgressAsync(param0: androidx.work.Data): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
      public getId(): java.util.UUID;
    }
    export module ListenableWorker {
      export abstract class Result {
        public static class: java.lang.Class<androidx.work.ListenableWorker.Result>;
        public static retry(): androidx.work.ListenableWorker.Result;
        public static failure(param0: androidx.work.Data): androidx.work.ListenableWorker.Result;
        public static success(): androidx.work.ListenableWorker.Result;
        public static failure(): androidx.work.ListenableWorker.Result;
        public static success(param0: androidx.work.Data): androidx.work.ListenableWorker.Result;
      }
      export module Result {
        export class Failure extends androidx.work.ListenableWorker.Result {
          public static class: java.lang.Class<androidx.work.ListenableWorker.Result.Failure>;
          public constructor(param0: androidx.work.Data);
          public equals(param0: any): boolean;
          public getOutputData(): androidx.work.Data;
          public toString(): string;
          public constructor();
          public hashCode(): number;
        }
        export class Retry extends androidx.work.ListenableWorker.Result {
          public static class: java.lang.Class<androidx.work.ListenableWorker.Result.Retry>;
          public equals(param0: any): boolean;
          public toString(): string;
          public constructor();
          public hashCode(): number;
        }
        export class Success extends androidx.work.ListenableWorker.Result {
          public static class: java.lang.Class<androidx.work.ListenableWorker.Result.Success>;
          public constructor(param0: androidx.work.Data);
          public equals(param0: any): boolean;
          public getOutputData(): androidx.work.Data;
          public toString(): string;
          public constructor();
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export abstract class Logger {
      public static class: java.lang.Class<androidx.work.Logger>;
      public warning(param0: string, param1: string, param2: native.Array<java.lang.Throwable>): void;
      public static tagWithPrefix(param0: string): string;
      public info(param0: string, param1: string, param2: native.Array<java.lang.Throwable>): void;
      public static setLogger(param0: androidx.work.Logger): void;
      public static get(): androidx.work.Logger;
      public error(param0: string, param1: string, param2: native.Array<java.lang.Throwable>): void;
      public constructor(param0: number);
      public debug(param0: string, param1: string, param2: native.Array<java.lang.Throwable>): void;
      public verbose(param0: string, param1: string, param2: native.Array<java.lang.Throwable>): void;
    }
    export module Logger {
      export class LogcatLogger extends androidx.work.Logger {
        public static class: java.lang.Class<androidx.work.Logger.LogcatLogger>;
        public verbose(param0: string, param1: string, param2: native.Array<java.lang.Throwable>): void;
        public error(param0: string, param1: string, param2: native.Array<java.lang.Throwable>): void;
        public constructor(param0: number);
        public warning(param0: string, param1: string, param2: native.Array<java.lang.Throwable>): void;
        public info(param0: string, param1: string, param2: native.Array<java.lang.Throwable>): void;
        public debug(param0: string, param1: string, param2: native.Array<java.lang.Throwable>): void;
      }
    }
  }
}

declare module androidx {
  export module work {
    export class NetworkType {
      public static class: java.lang.Class<androidx.work.NetworkType>;
      public static NOT_REQUIRED: androidx.work.NetworkType;
      public static CONNECTED: androidx.work.NetworkType;
      public static UNMETERED: androidx.work.NetworkType;
      public static NOT_ROAMING: androidx.work.NetworkType;
      public static METERED: androidx.work.NetworkType;
      public static valueOf(param0: string): androidx.work.NetworkType;
      public static values(): native.Array<androidx.work.NetworkType>;
    }
  }
}

declare module androidx {
  export module work {
    export class OneTimeWorkRequest extends androidx.work.WorkRequest {
      public static class: java.lang.Class<androidx.work.OneTimeWorkRequest>;
      public static from(param0: java.lang.Class<any>): androidx.work.OneTimeWorkRequest;
      public static from(param0: java.util.List<java.lang.Class<any>>): java.util.List<androidx.work.OneTimeWorkRequest>;
    }
    export module OneTimeWorkRequest {
      export class Builder extends androidx.work.WorkRequest.Builder<androidx.work.OneTimeWorkRequest.Builder, androidx.work.OneTimeWorkRequest> {
        public static class: java.lang.Class<androidx.work.OneTimeWorkRequest.Builder>;
        public constructor(param0: java.lang.Class<any>);
        public setInputMerger(param0: java.lang.Class<any>): androidx.work.OneTimeWorkRequest.Builder;
      }
    }
  }
}

declare module androidx {
  export module work {
    export class Operation {
      public static class: java.lang.Class<androidx.work.Operation>;
      /**
       * Constructs a new instance of the androidx.work.Operation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: {
        getState(): androidx.lifecycle.LiveData<androidx.work.Operation.State>;
        getResult(): com.google.common.util.concurrent.ListenableFuture<androidx.work.Operation.State.SUCCESS>;
        <clinit>(): void;
      });
      public constructor();
      public static SUCCESS: androidx.work.Operation.State.SUCCESS;
      public static IN_PROGRESS: androidx.work.Operation.State.IN_PROGRESS;
      public getState(): androidx.lifecycle.LiveData<androidx.work.Operation.State>;
      public getResult(): com.google.common.util.concurrent.ListenableFuture<androidx.work.Operation.State.SUCCESS>;
    }
    export module Operation {
      export abstract class State {
        public static class: java.lang.Class<androidx.work.Operation.State>;
      }
      export module State {
        export class FAILURE extends androidx.work.Operation.State {
          public static class: java.lang.Class<androidx.work.Operation.State.FAILURE>;
          public toString(): string;
          public constructor(param0: java.lang.Throwable);
          public getThrowable(): java.lang.Throwable;
        }
        export class IN_PROGRESS extends androidx.work.Operation.State {
          public static class: java.lang.Class<androidx.work.Operation.State.IN_PROGRESS>;
          public toString(): string;
        }
        export class SUCCESS extends androidx.work.Operation.State {
          public static class: java.lang.Class<androidx.work.Operation.State.SUCCESS>;
          public toString(): string;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export class OverwritingInputMerger extends androidx.work.InputMerger {
      public static class: java.lang.Class<androidx.work.OverwritingInputMerger>;
      public merge(param0: java.util.List<androidx.work.Data>): androidx.work.Data;
      public constructor();
    }
  }
}

declare module androidx {
  export module work {
    export class PeriodicWorkRequest extends androidx.work.WorkRequest {
      public static class: java.lang.Class<androidx.work.PeriodicWorkRequest>;
      public static MIN_PERIODIC_INTERVAL_MILLIS: number;
      public static MIN_PERIODIC_FLEX_MILLIS: number;
    }
    export module PeriodicWorkRequest {
      export class Builder extends androidx.work.WorkRequest.Builder<androidx.work.PeriodicWorkRequest.Builder, androidx.work.PeriodicWorkRequest> {
        public static class: java.lang.Class<androidx.work.PeriodicWorkRequest.Builder>;
        public constructor(param0: java.lang.Class<any>, param1: java.time.Duration, param2: java.time.Duration);
        public constructor(param0: java.lang.Class<any>, param1: number, param2: java.util.concurrent.TimeUnit, param3: number, param4: java.util.concurrent.TimeUnit);
        public constructor(param0: java.lang.Class<any>, param1: number, param2: java.util.concurrent.TimeUnit);
        public constructor(param0: java.lang.Class<any>, param1: java.time.Duration);
      }
    }
  }
}

declare module androidx {
  export module work {
    export class ProgressUpdater {
      public static class: java.lang.Class<androidx.work.ProgressUpdater>;
      /**
       * Constructs a new instance of the androidx.work.ProgressUpdater interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: {
        updateProgress(param0: globalAndroid.content.Context, param1: java.util.UUID, param2: androidx.work.Data): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
      });
      public constructor();
      public updateProgress(param0: globalAndroid.content.Context, param1: java.util.UUID, param2: androidx.work.Data): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
    }
  }
}

declare module androidx {
  export module work {
    export class RunnableScheduler {
      public static class: java.lang.Class<androidx.work.RunnableScheduler>;
      /**
       * Constructs a new instance of the androidx.work.RunnableScheduler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
       */
      public constructor(implementation: {
        scheduleWithDelay(param0: number, param1: java.lang.Runnable): void;
        cancel(param0: java.lang.Runnable): void;
      });
      public constructor();
      public scheduleWithDelay(param0: number, param1: java.lang.Runnable): void;
      public cancel(param0: java.lang.Runnable): void;
    }
  }
}

declare module androidx {
  export module work {
    export abstract class WorkContinuation {
      public static class: java.lang.Class<androidx.work.WorkContinuation>;
      public enqueue(): androidx.work.Operation;
      public static combine(param0: java.util.List<androidx.work.WorkContinuation>): androidx.work.WorkContinuation;
      public getWorkInfosLiveData(): androidx.lifecycle.LiveData<java.util.List<androidx.work.WorkInfo>>;
      public then(param0: androidx.work.OneTimeWorkRequest): androidx.work.WorkContinuation;
      public then(param0: java.util.List<androidx.work.OneTimeWorkRequest>): androidx.work.WorkContinuation;
      public constructor();
      public getWorkInfos(): com.google.common.util.concurrent.ListenableFuture<java.util.List<androidx.work.WorkInfo>>;
      public combineInternal(param0: java.util.List<androidx.work.WorkContinuation>): androidx.work.WorkContinuation;
    }
  }
}

declare module androidx {
  export module work {
    export class WorkInfo {
      public static class: java.lang.Class<androidx.work.WorkInfo>;
      public equals(param0: any): boolean;
      public getRunAttemptCount(): number;
      public toString(): string;
      public getProgress(): androidx.work.Data;
      public getState(): androidx.work.WorkInfo.State;
      public getTags(): java.util.Set<string>;
      public getOutputData(): androidx.work.Data;
      public constructor(param0: java.util.UUID, param1: androidx.work.WorkInfo.State, param2: androidx.work.Data, param3: java.util.List<string>, param4: androidx.work.Data, param5: number);
      public getId(): java.util.UUID;
      public hashCode(): number;
    }
    export module WorkInfo {
      export class State {
        public static class: java.lang.Class<androidx.work.WorkInfo.State>;
        public static ENQUEUED: androidx.work.WorkInfo.State;
        public static RUNNING: androidx.work.WorkInfo.State;
        public static SUCCEEDED: androidx.work.WorkInfo.State;
        public static FAILED: androidx.work.WorkInfo.State;
        public static BLOCKED: androidx.work.WorkInfo.State;
        public static CANCELLED: androidx.work.WorkInfo.State;
        public static values(): native.Array<androidx.work.WorkInfo.State>;
        public static valueOf(param0: string): androidx.work.WorkInfo.State;
        public isFinished(): boolean;
      }
    }
  }
}

declare module androidx {
  export module work {
    export abstract class WorkManager {
      public static class: java.lang.Class<androidx.work.WorkManager>;
      public beginUniqueWork(param0: string, param1: androidx.work.ExistingWorkPolicy, param2: java.util.List<androidx.work.OneTimeWorkRequest>): androidx.work.WorkContinuation;
      public cancelUniqueWork(param0: string): androidx.work.Operation;
      public beginUniqueWork(param0: string, param1: androidx.work.ExistingWorkPolicy, param2: androidx.work.OneTimeWorkRequest): androidx.work.WorkContinuation;
      public pruneWork(): androidx.work.Operation;
      public getLastCancelAllTimeMillisLiveData(): androidx.lifecycle.LiveData<java.lang.Long>;
      public getWorkInfosForUniqueWork(param0: string): com.google.common.util.concurrent.ListenableFuture<java.util.List<androidx.work.WorkInfo>>;
      public createCancelPendingIntent(param0: java.util.UUID): globalAndroid.app.PendingIntent;
      public beginWith(param0: androidx.work.OneTimeWorkRequest): androidx.work.WorkContinuation;
      public cancelWorkById(param0: java.util.UUID): androidx.work.Operation;
      public beginWith(param0: java.util.List<androidx.work.OneTimeWorkRequest>): androidx.work.WorkContinuation;
      public getWorkInfosForUniqueWorkLiveData(param0: string): androidx.lifecycle.LiveData<java.util.List<androidx.work.WorkInfo>>;
      public static getInstance(param0: globalAndroid.content.Context): androidx.work.WorkManager;
      public enqueue(param0: androidx.work.WorkRequest): androidx.work.Operation;
      /** @deprecated */
      public static getInstance(): androidx.work.WorkManager;
      public getWorkInfosLiveData(param0: androidx.work.WorkQuery): androidx.lifecycle.LiveData<java.util.List<androidx.work.WorkInfo>>;
      public getWorkInfosByTag(param0: string): com.google.common.util.concurrent.ListenableFuture<java.util.List<androidx.work.WorkInfo>>;
      public enqueue(param0: java.util.List<any>): androidx.work.Operation;
      public enqueueUniqueWork(param0: string, param1: androidx.work.ExistingWorkPolicy, param2: java.util.List<androidx.work.OneTimeWorkRequest>): androidx.work.Operation;
      public cancelAllWork(): androidx.work.Operation;
      public getWorkInfoByIdLiveData(param0: java.util.UUID): androidx.lifecycle.LiveData<androidx.work.WorkInfo>;
      public cancelAllWorkByTag(param0: string): androidx.work.Operation;
      public constructor();
      public getWorkInfos(param0: androidx.work.WorkQuery): com.google.common.util.concurrent.ListenableFuture<java.util.List<androidx.work.WorkInfo>>;
      public static initialize(param0: globalAndroid.content.Context, param1: androidx.work.Configuration): void;
      public getLastCancelAllTimeMillis(): com.google.common.util.concurrent.ListenableFuture<java.lang.Long>;
      public getWorkInfosByTagLiveData(param0: string): androidx.lifecycle.LiveData<java.util.List<androidx.work.WorkInfo>>;
      public getWorkInfoById(param0: java.util.UUID): com.google.common.util.concurrent.ListenableFuture<androidx.work.WorkInfo>;
      public enqueueUniquePeriodicWork(param0: string, param1: androidx.work.ExistingPeriodicWorkPolicy, param2: androidx.work.PeriodicWorkRequest): androidx.work.Operation;
      public enqueueUniqueWork(param0: string, param1: androidx.work.ExistingWorkPolicy, param2: androidx.work.OneTimeWorkRequest): androidx.work.Operation;
    }
  }
}

declare module androidx {
  export module work {
    export class WorkQuery {
      public static class: java.lang.Class<androidx.work.WorkQuery>;
      public getStates(): java.util.List<androidx.work.WorkInfo.State>;
      public getTags(): java.util.List<string>;
      public getIds(): java.util.List<java.util.UUID>;
      public getUniqueWorkNames(): java.util.List<string>;
    }
    export module WorkQuery {
      export class Builder {
        public static class: java.lang.Class<androidx.work.WorkQuery.Builder>;
        public build(): androidx.work.WorkQuery;
        public addIds(param0: java.util.List<java.util.UUID>): androidx.work.WorkQuery.Builder;
        public addStates(param0: java.util.List<androidx.work.WorkInfo.State>): androidx.work.WorkQuery.Builder;
        public static fromIds(param0: java.util.List<java.util.UUID>): androidx.work.WorkQuery.Builder;
        public static fromStates(param0: java.util.List<androidx.work.WorkInfo.State>): androidx.work.WorkQuery.Builder;
        public static fromTags(param0: java.util.List<string>): androidx.work.WorkQuery.Builder;
        public addUniqueWorkNames(param0: java.util.List<string>): androidx.work.WorkQuery.Builder;
        public addTags(param0: java.util.List<string>): androidx.work.WorkQuery.Builder;
        public static fromUniqueWorkNames(param0: java.util.List<string>): androidx.work.WorkQuery.Builder;
      }
    }
  }
}

declare module androidx {
  export module work {
    export abstract class WorkRequest {
      public static class: java.lang.Class<androidx.work.WorkRequest>;
      public static DEFAULT_BACKOFF_DELAY_MILLIS: number;
      public static MAX_BACKOFF_MILLIS: number;
      public static MIN_BACKOFF_MILLIS: number;
      public getTags(): java.util.Set<string>;
      public getStringId(): string;
      public constructor(param0: java.util.UUID, param1: androidx.work.impl.model.WorkSpec, param2: java.util.Set<string>);
      public getId(): java.util.UUID;
      public getWorkSpec(): androidx.work.impl.model.WorkSpec;
    }
    export module WorkRequest {
      export abstract class Builder<B, W> extends java.lang.Object {
        public static class: java.lang.Class<androidx.work.WorkRequest.Builder<any, any>>;
        public keepResultsForAtLeast(param0: java.time.Duration): B;
        public setInputData(param0: androidx.work.Data): B;
        public addTag(param0: string): B;
        public setPeriodStartTime(param0: number, param1: java.util.concurrent.TimeUnit): B;
        public setInitialDelay(param0: java.time.Duration): B;
        public setInitialState(param0: androidx.work.WorkInfo.State): B;
        public build(): W;
        public setScheduleRequestedAt(param0: number, param1: java.util.concurrent.TimeUnit): B;
        public setBackoffCriteria(param0: androidx.work.BackoffPolicy, param1: number, param2: java.util.concurrent.TimeUnit): B;
        public setConstraints(param0: androidx.work.Constraints): B;
        public keepResultsForAtLeast(param0: number, param1: java.util.concurrent.TimeUnit): B;
        public setInitialDelay(param0: number, param1: java.util.concurrent.TimeUnit): B;
        public setBackoffCriteria(param0: androidx.work.BackoffPolicy, param1: java.time.Duration): B;
        public setInitialRunAttemptCount(param0: number): B;
      }
    }
  }
}

declare module androidx {
  export module work {
    export abstract class Worker extends androidx.work.ListenableWorker {
      public static class: java.lang.Class<androidx.work.Worker>;
      public startWork(): com.google.common.util.concurrent.ListenableFuture<androidx.work.ListenableWorker.Result>;
      public doWork(): androidx.work.ListenableWorker.Result;
      public constructor(param0: globalAndroid.content.Context, param1: androidx.work.WorkerParameters);
    }
  }
}

declare module androidx {
  export module work {
    export abstract class WorkerFactory {
      public static class: java.lang.Class<androidx.work.WorkerFactory>;
      public createWorkerWithDefaultFallback(param0: globalAndroid.content.Context, param1: string, param2: androidx.work.WorkerParameters): androidx.work.ListenableWorker;
      public createWorker(param0: globalAndroid.content.Context, param1: string, param2: androidx.work.WorkerParameters): androidx.work.ListenableWorker;
      public constructor();
      public static getDefaultWorkerFactory(): androidx.work.WorkerFactory;
    }
  }
}

declare module androidx {
  export module work {
    export class WorkerParameters {
      public static class: java.lang.Class<androidx.work.WorkerParameters>;
      public getTriggeredContentUris(): java.util.List<globalAndroid.net.Uri>;
      public getProgressUpdater(): androidx.work.ProgressUpdater;
      public getRunAttemptCount(): number;
      public constructor(param0: java.util.UUID, param1: androidx.work.Data, param2: java.util.Collection<string>, param3: androidx.work.WorkerParameters.RuntimeExtras, param4: number, param5: java.util.concurrent.Executor, param6: androidx.work.impl.utils.taskexecutor.TaskExecutor, param7: androidx.work.WorkerFactory, param8: androidx.work.ProgressUpdater, param9: androidx.work.ForegroundUpdater);
      public getTags(): java.util.Set<string>;
      public getForegroundUpdater(): androidx.work.ForegroundUpdater;
      public getWorkerFactory(): androidx.work.WorkerFactory;
      public getInputData(): androidx.work.Data;
      public getNetwork(): globalAndroid.net.Network;
      public getTriggeredContentAuthorities(): java.util.List<string>;
      public getBackgroundExecutor(): java.util.concurrent.Executor;
      public getTaskExecutor(): androidx.work.impl.utils.taskexecutor.TaskExecutor;
      public getId(): java.util.UUID;
    }
    export module WorkerParameters {
      export class RuntimeExtras {
        public static class: java.lang.Class<androidx.work.WorkerParameters.RuntimeExtras>;
        public triggeredContentAuthorities: java.util.List<string>;
        public triggeredContentUris: java.util.List<globalAndroid.net.Uri>;
        public network: globalAndroid.net.Network;
        public constructor();
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export class DefaultRunnableScheduler extends androidx.work.RunnableScheduler {
        public static class: java.lang.Class<androidx.work.impl.DefaultRunnableScheduler>;
        public constructor(param0: globalAndroid.os.Handler);
        public getHandler(): globalAndroid.os.Handler;
        public scheduleWithDelay(param0: number, param1: java.lang.Runnable): void;
        public cancel(param0: java.lang.Runnable): void;
        public constructor();
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export class ExecutionListener {
        public static class: java.lang.Class<androidx.work.impl.ExecutionListener>;
        /**
         * Constructs a new instance of the androidx.work.impl.ExecutionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          onExecuted(param0: string, param1: boolean): void;
        });
        public constructor();
        public onExecuted(param0: string, param1: boolean): void;
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export class OperationImpl extends androidx.work.Operation {
        public static class: java.lang.Class<androidx.work.impl.OperationImpl>;
        public setState(param0: androidx.work.Operation.State): void;
        public getState(): androidx.lifecycle.LiveData<androidx.work.Operation.State>;
        public constructor();
        public getResult(): com.google.common.util.concurrent.ListenableFuture<androidx.work.Operation.State.SUCCESS>;
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export class Processor implements androidx.work.impl.ExecutionListener, androidx.work.impl.foreground.ForegroundProcessor {
        public static class: java.lang.Class<androidx.work.impl.Processor>;
        public constructor(param0: globalAndroid.content.Context, param1: androidx.work.Configuration, param2: androidx.work.impl.utils.taskexecutor.TaskExecutor, param3: androidx.work.impl.WorkDatabase, param4: java.util.List<androidx.work.impl.Scheduler>);
        public hasWork(): boolean;
        public isEnqueued(param0: string): boolean;
        public isEnqueuedInForeground(param0: string): boolean;
        public startForeground(param0: string, param1: androidx.work.ForegroundInfo): void;
        public stopForegroundWork(param0: string): boolean;
        public startWork(param0: string, param1: androidx.work.WorkerParameters.RuntimeExtras): boolean;
        public addExecutionListener(param0: androidx.work.impl.ExecutionListener): void;
        public stopWork(param0: string): boolean;
        public removeExecutionListener(param0: androidx.work.impl.ExecutionListener): void;
        public stopAndCancelWork(param0: string): boolean;
        public isCancelled(param0: string): boolean;
        public onExecuted(param0: string, param1: boolean): void;
        public startWork(param0: string): boolean;
        public stopForeground(param0: string): void;
      }
      export module Processor {
        export class FutureListener {
          public static class: java.lang.Class<androidx.work.impl.Processor.FutureListener>;
          public run(): void;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export class Scheduler {
        public static class: java.lang.Class<androidx.work.impl.Scheduler>;
        /**
         * Constructs a new instance of the androidx.work.impl.Scheduler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          schedule(param0: native.Array<androidx.work.impl.model.WorkSpec>): void;
          cancel(param0: string): void;
          hasLimitedSchedulingSlots(): boolean;
        });
        public constructor();
        public static MAX_GREEDY_SCHEDULER_LIMIT: number;
        public static MAX_SCHEDULER_LIMIT: number;
        public cancel(param0: string): void;
        public hasLimitedSchedulingSlots(): boolean;
        public schedule(param0: native.Array<androidx.work.impl.model.WorkSpec>): void;
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export class Schedulers {
        public static class: java.lang.Class<androidx.work.impl.Schedulers>;
        public static GCM_SCHEDULER: string;
        public static schedule(param0: androidx.work.Configuration, param1: androidx.work.impl.WorkDatabase, param2: java.util.List<androidx.work.impl.Scheduler>): void;
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export class WorkContinuationImpl extends androidx.work.WorkContinuation {
        public static class: java.lang.Class<androidx.work.impl.WorkContinuationImpl>;
        public constructor(param0: androidx.work.impl.WorkManagerImpl, param1: string, param2: androidx.work.ExistingWorkPolicy, param3: java.util.List<any>);
        public then(param0: androidx.work.OneTimeWorkRequest): androidx.work.WorkContinuation;
        public getParents(): java.util.List<androidx.work.impl.WorkContinuationImpl>;
        public constructor(param0: androidx.work.impl.WorkManagerImpl, param1: java.util.List<any>);
        public constructor(param0: androidx.work.impl.WorkManagerImpl, param1: string, param2: androidx.work.ExistingWorkPolicy, param3: java.util.List<any>, param4: java.util.List<androidx.work.impl.WorkContinuationImpl>);
        public getName(): string;
        public getWorkInfosLiveData(): androidx.lifecycle.LiveData<java.util.List<androidx.work.WorkInfo>>;
        public then(param0: java.util.List<androidx.work.OneTimeWorkRequest>): androidx.work.WorkContinuation;
        public constructor();
        public getWorkInfos(): com.google.common.util.concurrent.ListenableFuture<java.util.List<androidx.work.WorkInfo>>;
        public getWork(): java.util.List<any>;
        public static prerequisitesFor(param0: androidx.work.impl.WorkContinuationImpl): java.util.Set<string>;
        public enqueue(): androidx.work.Operation;
        public getWorkManagerImpl(): androidx.work.impl.WorkManagerImpl;
        public getIds(): java.util.List<string>;
        public getAllIds(): java.util.List<string>;
        public isEnqueued(): boolean;
        public combineInternal(param0: java.util.List<androidx.work.WorkContinuation>): androidx.work.WorkContinuation;
        public hasCycles(): boolean;
        public markEnqueued(): void;
        public getExistingWorkPolicy(): androidx.work.ExistingWorkPolicy;
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export abstract class WorkDatabase {
        public static class: java.lang.Class<androidx.work.impl.WorkDatabase>;
        public systemIdInfoDao(): androidx.work.impl.model.SystemIdInfoDao;
        public preferenceDao(): androidx.work.impl.model.PreferenceDao;
        public static create(param0: globalAndroid.content.Context, param1: java.util.concurrent.Executor, param2: boolean): androidx.work.impl.WorkDatabase;
        public workSpecDao(): androidx.work.impl.model.WorkSpecDao;
        public workNameDao(): androidx.work.impl.model.WorkNameDao;
        public workTagDao(): androidx.work.impl.model.WorkTagDao;
        public rawWorkInfoDao(): androidx.work.impl.model.RawWorkInfoDao;
        public constructor();
        public dependencyDao(): androidx.work.impl.model.DependencyDao;
        public workProgressDao(): androidx.work.impl.model.WorkProgressDao;
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export class WorkDatabaseMigrations {
        public static class: java.lang.Class<androidx.work.impl.WorkDatabaseMigrations>;
        public static VERSION_1: number;
        public static VERSION_2: number;
        public static VERSION_3: number;
        public static VERSION_4: number;
        public static VERSION_5: number;
        public static VERSION_6: number;
        public static VERSION_7: number;
        public static VERSION_8: number;
        public static VERSION_9: number;
        public static VERSION_10: number;
        public static VERSION_11: number;
        public static INSERT_PREFERENCE: string;
        public static MIGRATION_1_2: androidx.room.migration.Migration;
        public static MIGRATION_3_4: androidx.room.migration.Migration;
        public static MIGRATION_4_5: androidx.room.migration.Migration;
        public static MIGRATION_6_7: androidx.room.migration.Migration;
        public static MIGRATION_7_8: androidx.room.migration.Migration;
        public static MIGRATION_8_9: androidx.room.migration.Migration;
      }
      export module WorkDatabaseMigrations {
        export class RescheduleMigration {
          public static class: java.lang.Class<androidx.work.impl.WorkDatabaseMigrations.RescheduleMigration>;
          public migrate(param0: androidx.sqlite.db.SupportSQLiteDatabase): void;
          public constructor(param0: globalAndroid.content.Context, param1: number, param2: number);
        }
        export class WorkMigration9To10 {
          public static class: java.lang.Class<androidx.work.impl.WorkDatabaseMigrations.WorkMigration9To10>;
          public constructor(param0: globalAndroid.content.Context);
          public migrate(param0: androidx.sqlite.db.SupportSQLiteDatabase): void;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export class WorkDatabasePathHelper {
        public static class: java.lang.Class<androidx.work.impl.WorkDatabasePathHelper>;
        public static getDatabasePath(param0: globalAndroid.content.Context): java.io.File;
        public static getDefaultDatabasePath(param0: globalAndroid.content.Context): java.io.File;
        public static migrateDatabase(param0: globalAndroid.content.Context): void;
        public static getWorkDatabaseName(): string;
        public static migrationPaths(param0: globalAndroid.content.Context): java.util.Map<java.io.File, java.io.File>;
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export class WorkDatabase_Impl extends androidx.work.impl.WorkDatabase {
        public static class: java.lang.Class<androidx.work.impl.WorkDatabase_Impl>;
        public systemIdInfoDao(): androidx.work.impl.model.SystemIdInfoDao;
        public clearAllTables(): void;
        public preferenceDao(): androidx.work.impl.model.PreferenceDao;
        public createOpenHelper(param0: androidx.room.DatabaseConfiguration): androidx.sqlite.db.SupportSQLiteOpenHelper;
        public createInvalidationTracker(): androidx.room.InvalidationTracker;
        public workSpecDao(): androidx.work.impl.model.WorkSpecDao;
        public workNameDao(): androidx.work.impl.model.WorkNameDao;
        public workTagDao(): androidx.work.impl.model.WorkTagDao;
        public rawWorkInfoDao(): androidx.work.impl.model.RawWorkInfoDao;
        public constructor();
        public dependencyDao(): androidx.work.impl.model.DependencyDao;
        public workProgressDao(): androidx.work.impl.model.WorkProgressDao;
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export class WorkManagerImpl extends androidx.work.WorkManager {
        public static class: java.lang.Class<androidx.work.impl.WorkManagerImpl>;
        public static MAX_PRE_JOB_SCHEDULER_API_LEVEL: number;
        public static MIN_JOB_SCHEDULER_API_LEVEL: number;
        public static REMOTE_WORK_MANAGER_CLIENT: string;
        public getApplicationContext(): globalAndroid.content.Context;
        public getWorkInfosByTagLiveData(param0: string): androidx.lifecycle.LiveData<java.util.List<androidx.work.WorkInfo>>;
        public setReschedulePendingResult(param0: globalAndroid.content.BroadcastReceiver.PendingResult): void;
        public beginWith(param0: java.util.List<androidx.work.OneTimeWorkRequest>): androidx.work.WorkContinuation;
        public getWorkInfoByIdLiveData(param0: java.util.UUID): androidx.lifecycle.LiveData<androidx.work.WorkInfo>;
        public constructor();
        public enqueue(param0: androidx.work.WorkRequest): androidx.work.Operation;
        public stopForegroundWork(param0: string): void;
        public cancelAllWorkByTag(param0: string): androidx.work.Operation;
        public createSchedulers(param0: globalAndroid.content.Context, param1: androidx.work.Configuration, param2: androidx.work.impl.utils.taskexecutor.TaskExecutor): java.util.List<androidx.work.impl.Scheduler>;
        /** @deprecated */
        public static getInstance(): androidx.work.WorkManager;
        public beginWith(param0: androidx.work.OneTimeWorkRequest): androidx.work.WorkContinuation;
        /** @deprecated */
        public static getInstance(): androidx.work.impl.WorkManagerImpl;
        public createCancelPendingIntent(param0: java.util.UUID): globalAndroid.app.PendingIntent;
        public getWorkInfoById(param0: java.util.UUID): com.google.common.util.concurrent.ListenableFuture<androidx.work.WorkInfo>;
        public getPreferenceUtils(): androidx.work.impl.utils.PreferenceUtils;
        public cancelAllWork(): androidx.work.Operation;
        public getWorkInfosForUniqueWorkLiveData(param0: string): androidx.lifecycle.LiveData<java.util.List<androidx.work.WorkInfo>>;
        public getConfiguration(): androidx.work.Configuration;
        public pruneWork(): androidx.work.Operation;
        public createWorkContinuationForUniquePeriodicWork(param0: string, param1: androidx.work.ExistingPeriodicWorkPolicy, param2: androidx.work.PeriodicWorkRequest): androidx.work.impl.WorkContinuationImpl;
        public getWorkDatabase(): androidx.work.impl.WorkDatabase;
        public constructor(param0: globalAndroid.content.Context, param1: androidx.work.Configuration, param2: androidx.work.impl.utils.taskexecutor.TaskExecutor, param3: androidx.work.impl.WorkDatabase, param4: java.util.List<androidx.work.impl.Scheduler>, param5: androidx.work.impl.Processor);
        public getLastCancelAllTimeMillisLiveData(): androidx.lifecycle.LiveData<java.lang.Long>;
        public getLastCancelAllTimeMillis(): com.google.common.util.concurrent.ListenableFuture<java.lang.Long>;
        public getWorkTaskExecutor(): androidx.work.impl.utils.taskexecutor.TaskExecutor;
        public getWorkInfosForUniqueWork(param0: string): com.google.common.util.concurrent.ListenableFuture<java.util.List<androidx.work.WorkInfo>>;
        public enqueue(param0: java.util.List<any>): androidx.work.Operation;
        public constructor(param0: globalAndroid.content.Context, param1: androidx.work.Configuration, param2: androidx.work.impl.utils.taskexecutor.TaskExecutor);
        public static setDelegate(param0: androidx.work.impl.WorkManagerImpl): void;
        public beginUniqueWork(param0: string, param1: androidx.work.ExistingWorkPolicy, param2: java.util.List<androidx.work.OneTimeWorkRequest>): androidx.work.WorkContinuation;
        public startWork(param0: string): void;
        public getSchedulers(): java.util.List<androidx.work.impl.Scheduler>;
        public cancelWorkById(param0: java.util.UUID): androidx.work.Operation;
        public rescheduleEligibleWork(): void;
        public constructor(param0: globalAndroid.content.Context, param1: androidx.work.Configuration, param2: androidx.work.impl.utils.taskexecutor.TaskExecutor, param3: androidx.work.impl.WorkDatabase);
        public enqueueUniqueWork(param0: string, param1: androidx.work.ExistingWorkPolicy, param2: androidx.work.OneTimeWorkRequest): androidx.work.Operation;
        public getWorkInfosLiveData(param0: androidx.work.WorkQuery): androidx.lifecycle.LiveData<java.util.List<androidx.work.WorkInfo>>;
        public getWorkInfos(param0: androidx.work.WorkQuery): com.google.common.util.concurrent.ListenableFuture<java.util.List<androidx.work.WorkInfo>>;
        public constructor(param0: globalAndroid.content.Context, param1: androidx.work.Configuration, param2: androidx.work.impl.utils.taskexecutor.TaskExecutor, param3: boolean);
        public static getInstance(param0: globalAndroid.content.Context): androidx.work.impl.WorkManagerImpl;
        public enqueueUniqueWork(param0: string, param1: androidx.work.ExistingWorkPolicy, param2: java.util.List<androidx.work.OneTimeWorkRequest>): androidx.work.Operation;
        public getWorkInfosByTag(param0: string): com.google.common.util.concurrent.ListenableFuture<java.util.List<androidx.work.WorkInfo>>;
        public getProcessor(): androidx.work.impl.Processor;
        public cancelUniqueWork(param0: string): androidx.work.Operation;
        public startWork(param0: string, param1: androidx.work.WorkerParameters.RuntimeExtras): void;
        public static initialize(param0: globalAndroid.content.Context, param1: androidx.work.Configuration): void;
        public beginUniqueWork(param0: string, param1: androidx.work.ExistingWorkPolicy, param2: androidx.work.OneTimeWorkRequest): androidx.work.WorkContinuation;
        public stopWork(param0: string): void;
        public enqueueUniquePeriodicWork(param0: string, param1: androidx.work.ExistingPeriodicWorkPolicy, param2: androidx.work.PeriodicWorkRequest): androidx.work.Operation;
        public onForceStopRunnableCompleted(): void;
        public static getInstance(param0: globalAndroid.content.Context): androidx.work.WorkManager;
        public getRemoteWorkManager(): androidx.work.multiprocess.RemoteWorkManager;
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export class WorkManagerInitializer {
        public static class: java.lang.Class<androidx.work.impl.WorkManagerInitializer>;
        public getType(param0: globalAndroid.net.Uri): string;
        public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
        public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
        public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
        public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
        public onCreate(): boolean;
        public constructor();
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export class WorkRequestHolder extends androidx.work.WorkRequest {
        public static class: java.lang.Class<androidx.work.impl.WorkRequestHolder>;
        public constructor(param0: java.util.UUID, param1: androidx.work.impl.model.WorkSpec, param2: java.util.Set<string>);
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export class WorkerWrapper {
        public static class: java.lang.Class<androidx.work.impl.WorkerWrapper>;
        public run(): void;
        public interrupt(): void;
        public getFuture(): com.google.common.util.concurrent.ListenableFuture<java.lang.Boolean>;
      }
      export module WorkerWrapper {
        export class Builder {
          public static class: java.lang.Class<androidx.work.impl.WorkerWrapper.Builder>;
          public constructor(param0: globalAndroid.content.Context, param1: androidx.work.Configuration, param2: androidx.work.impl.utils.taskexecutor.TaskExecutor, param3: androidx.work.impl.foreground.ForegroundProcessor, param4: androidx.work.impl.WorkDatabase, param5: string);
          public withSchedulers(param0: java.util.List<androidx.work.impl.Scheduler>): androidx.work.impl.WorkerWrapper.Builder;
          public build(): androidx.work.impl.WorkerWrapper;
          public withWorker(param0: androidx.work.ListenableWorker): androidx.work.impl.WorkerWrapper.Builder;
          public withRuntimeExtras(param0: androidx.work.WorkerParameters.RuntimeExtras): androidx.work.impl.WorkerWrapper.Builder;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module background {
        export module greedy {
          export class DelayedWorkTracker {
            public static class: java.lang.Class<androidx.work.impl.background.greedy.DelayedWorkTracker>;
            public schedule(param0: androidx.work.impl.model.WorkSpec): void;
            public constructor(param0: androidx.work.impl.background.greedy.GreedyScheduler, param1: androidx.work.RunnableScheduler);
            public unschedule(param0: string): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module background {
        export module greedy {
          export class GreedyScheduler implements androidx.work.impl.Scheduler, androidx.work.impl.constraints.WorkConstraintsCallback, androidx.work.impl.ExecutionListener {
            public static class: java.lang.Class<androidx.work.impl.background.greedy.GreedyScheduler>;
            public setDelayedWorkTracker(param0: androidx.work.impl.background.greedy.DelayedWorkTracker): void;
            public constructor(param0: globalAndroid.content.Context, param1: androidx.work.impl.WorkManagerImpl, param2: androidx.work.impl.constraints.WorkConstraintsTracker);
            public onAllConstraintsMet(param0: java.util.List<string>): void;
            public cancel(param0: string): void;
            public onAllConstraintsNotMet(param0: java.util.List<string>): void;
            public hasLimitedSchedulingSlots(): boolean;
            public onExecuted(param0: string, param1: boolean): void;
            public constructor(param0: globalAndroid.content.Context, param1: androidx.work.Configuration, param2: androidx.work.impl.utils.taskexecutor.TaskExecutor, param3: androidx.work.impl.WorkManagerImpl);
            public schedule(param0: native.Array<androidx.work.impl.model.WorkSpec>): void;
          }
        }
      }
    }
  }
}


declare module androidx {
  export module work {
    export module impl {
      export module background {
        export module systemalarm {
          export class Alarms {
            public static class: java.lang.Class<androidx.work.impl.background.systemalarm.Alarms>;
            public static cancelAlarm(param0: globalAndroid.content.Context, param1: androidx.work.impl.WorkManagerImpl, param2: string): void;
            public static setAlarm(param0: globalAndroid.content.Context, param1: androidx.work.impl.WorkManagerImpl, param2: string, param3: number): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module background {
        export module systemalarm {
          export class CommandHandler extends androidx.work.impl.ExecutionListener {
            public static class: java.lang.Class<androidx.work.impl.background.systemalarm.CommandHandler>;
            public onExecuted(param0: string, param1: boolean): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module background {
        export module systemalarm {
          export abstract class ConstraintProxy {
            public static class: java.lang.Class<androidx.work.impl.background.systemalarm.ConstraintProxy>;
            public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
          }
          export module ConstraintProxy {
            export class BatteryChargingProxy extends androidx.work.impl.background.systemalarm.ConstraintProxy {
              public static class: java.lang.Class<androidx.work.impl.background.systemalarm.ConstraintProxy.BatteryChargingProxy>;
              public constructor();
            }
            export class BatteryNotLowProxy extends androidx.work.impl.background.systemalarm.ConstraintProxy {
              public static class: java.lang.Class<androidx.work.impl.background.systemalarm.ConstraintProxy.BatteryNotLowProxy>;
              public constructor();
            }
            export class NetworkStateProxy extends androidx.work.impl.background.systemalarm.ConstraintProxy {
              public static class: java.lang.Class<androidx.work.impl.background.systemalarm.ConstraintProxy.NetworkStateProxy>;
              public constructor();
            }
            export class StorageNotLowProxy extends androidx.work.impl.background.systemalarm.ConstraintProxy {
              public static class: java.lang.Class<androidx.work.impl.background.systemalarm.ConstraintProxy.StorageNotLowProxy>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module background {
        export module systemalarm {
          export class ConstraintProxyUpdateReceiver {
            public static class: java.lang.Class<androidx.work.impl.background.systemalarm.ConstraintProxyUpdateReceiver>;
            public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
            public constructor();
            public static newConstraintProxyUpdateIntent(param0: globalAndroid.content.Context, param1: boolean, param2: boolean, param3: boolean, param4: boolean): globalAndroid.content.Intent;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module background {
        export module systemalarm {
          export class ConstraintsCommandHandler {
            public static class: java.lang.Class<androidx.work.impl.background.systemalarm.ConstraintsCommandHandler>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module background {
        export module systemalarm {
          export class DelayMetCommandHandler implements androidx.work.impl.constraints.WorkConstraintsCallback, androidx.work.impl.ExecutionListener, androidx.work.impl.utils.WorkTimer.TimeLimitExceededListener {
            public static class: java.lang.Class<androidx.work.impl.background.systemalarm.DelayMetCommandHandler>;
            public onAllConstraintsMet(param0: java.util.List<string>): void;
            public onAllConstraintsNotMet(param0: java.util.List<string>): void;
            public onExecuted(param0: string, param1: boolean): void;
            public onTimeLimitExceeded(param0: string): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module background {
        export module systemalarm {
          export class RescheduleReceiver {
            public static class: java.lang.Class<androidx.work.impl.background.systemalarm.RescheduleReceiver>;
            public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
            public constructor();
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module background {
        export module systemalarm {
          export class SystemAlarmDispatcher extends androidx.work.impl.ExecutionListener {
            public static class: java.lang.Class<androidx.work.impl.background.systemalarm.SystemAlarmDispatcher>;
            public add(param0: globalAndroid.content.Intent, param1: number): boolean;
            public onExecuted(param0: string, param1: boolean): void;
          }
          export module SystemAlarmDispatcher {
            export class AddRunnable {
              public static class: java.lang.Class<androidx.work.impl.background.systemalarm.SystemAlarmDispatcher.AddRunnable>;
              public run(): void;
            }
            export class CommandsCompletedListener {
              public static class: java.lang.Class<androidx.work.impl.background.systemalarm.SystemAlarmDispatcher.CommandsCompletedListener>;
              /**
               * Constructs a new instance of the androidx.work.impl.background.systemalarm.SystemAlarmDispatcher$CommandsCompletedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                onAllCommandsCompleted(): void;
              });
              public constructor();
              public onAllCommandsCompleted(): void;
            }
            export class DequeueAndCheckForCompletion {
              public static class: java.lang.Class<androidx.work.impl.background.systemalarm.SystemAlarmDispatcher.DequeueAndCheckForCompletion>;
              public run(): void;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module background {
        export module systemalarm {
          export class SystemAlarmScheduler extends androidx.work.impl.Scheduler {
            public static class: java.lang.Class<androidx.work.impl.background.systemalarm.SystemAlarmScheduler>;
            public constructor(param0: globalAndroid.content.Context);
            public cancel(param0: string): void;
            public hasLimitedSchedulingSlots(): boolean;
            public schedule(param0: native.Array<androidx.work.impl.model.WorkSpec>): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module background {
        export module systemalarm {
          export class SystemAlarmService implements androidx.work.impl.background.systemalarm.SystemAlarmDispatcher.CommandsCompletedListener {
            public static class: java.lang.Class<androidx.work.impl.background.systemalarm.SystemAlarmService>;
            public constructor();
            public onDestroy(): void;
            public onCreate(): void;
            public onAllCommandsCompleted(): void;
            public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
          }
        }
      }
    }
  }
}


declare module androidx {
  export module work {
    export module impl {
      export module background {
        export module systemjob {
          export class SystemJobInfoConverter {
            public static class: java.lang.Class<androidx.work.impl.background.systemjob.SystemJobInfoConverter>;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module background {
        export module systemjob {
          export class SystemJobScheduler extends androidx.work.impl.Scheduler {
            public static class: java.lang.Class<androidx.work.impl.background.systemjob.SystemJobScheduler>;
            public cancel(param0: string): void;
            public constructor(param0: globalAndroid.content.Context, param1: androidx.work.impl.WorkManagerImpl, param2: any, param3: androidx.work.impl.background.systemjob.SystemJobInfoConverter);
            public static reconcileJobs(param0: globalAndroid.content.Context, param1: androidx.work.impl.WorkManagerImpl): boolean;
            public hasLimitedSchedulingSlots(): boolean;
            public scheduleInternal(param0: androidx.work.impl.model.WorkSpec, param1: number): void;
            public constructor(param0: globalAndroid.content.Context, param1: androidx.work.impl.WorkManagerImpl);
            public static cancelAll(param0: globalAndroid.content.Context): void;
            public schedule(param0: native.Array<androidx.work.impl.model.WorkSpec>): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module background {
        export module systemjob {
          export class SystemJobService implements androidx.work.impl.ExecutionListener {
            public static class: java.lang.Class<androidx.work.impl.background.systemjob.SystemJobService>;
            public constructor();
            public onDestroy(): void;
            public onCreate(): void;
            public onStartJob(param0: any): boolean;
            public onExecuted(param0: string, param1: boolean): void;
            public onStopJob(param0: any): boolean;
          }
        }
      }
    }
  }
}


declare module androidx {
  export module work {
    export module impl {
      export module constraints {
        export class ConstraintListener<T> extends java.lang.Object {
          public static class: java.lang.Class<androidx.work.impl.constraints.ConstraintListener<any>>;
          /**
           * Constructs a new instance of the androidx.work.impl.constraints.ConstraintListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            onConstraintChanged(param0: T): void;
          });
          public constructor();
          public onConstraintChanged(param0: T): void;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module constraints {
        export class NetworkState {
          public static class: java.lang.Class<androidx.work.impl.constraints.NetworkState>;
          public equals(param0: any): boolean;
          public toString(): string;
          public isConnected(): boolean;
          public isValidated(): boolean;
          public constructor(param0: boolean, param1: boolean, param2: boolean, param3: boolean);
          public isNotRoaming(): boolean;
          public isMetered(): boolean;
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module constraints {
        export class WorkConstraintsCallback {
          public static class: java.lang.Class<androidx.work.impl.constraints.WorkConstraintsCallback>;
          /**
           * Constructs a new instance of the androidx.work.impl.constraints.WorkConstraintsCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            onAllConstraintsMet(param0: java.util.List<string>): void;
            onAllConstraintsNotMet(param0: java.util.List<string>): void;
          });
          public constructor();
          public onAllConstraintsMet(param0: java.util.List<string>): void;
          public onAllConstraintsNotMet(param0: java.util.List<string>): void;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module constraints {
        export class WorkConstraintsTracker extends androidx.work.impl.constraints.controllers.ConstraintController.OnConstraintUpdatedCallback {
          public static class: java.lang.Class<androidx.work.impl.constraints.WorkConstraintsTracker>;
          public reset(): void;
          public onConstraintMet(param0: java.util.List<string>): void;
          public constructor(param0: globalAndroid.content.Context, param1: androidx.work.impl.utils.taskexecutor.TaskExecutor, param2: androidx.work.impl.constraints.WorkConstraintsCallback);
          public areAllConstraintsMet(param0: string): boolean;
          public onConstraintNotMet(param0: java.util.List<string>): void;
          public replace(param0: java.lang.Iterable<androidx.work.impl.model.WorkSpec>): void;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module constraints {
        export module controllers {
          export class BatteryChargingController extends androidx.work.impl.constraints.controllers.ConstraintController<java.lang.Boolean> {
            public static class: java.lang.Class<androidx.work.impl.constraints.controllers.BatteryChargingController>;
            public constructor(param0: globalAndroid.content.Context, param1: androidx.work.impl.utils.taskexecutor.TaskExecutor);
            public onConstraintChanged(param0: any): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module constraints {
        export module controllers {
          export class BatteryNotLowController extends androidx.work.impl.constraints.controllers.ConstraintController<java.lang.Boolean> {
            public static class: java.lang.Class<androidx.work.impl.constraints.controllers.BatteryNotLowController>;
            public constructor(param0: globalAndroid.content.Context, param1: androidx.work.impl.utils.taskexecutor.TaskExecutor);
            public onConstraintChanged(param0: any): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module constraints {
        export module controllers {
          export abstract class ConstraintController<T> extends androidx.work.impl.constraints.ConstraintListener<any> {
            public static class: java.lang.Class<androidx.work.impl.constraints.controllers.ConstraintController<any>>;
            public onConstraintChanged(param0: any): void;
            public isWorkSpecConstrained(param0: string): boolean;
            public replace(param0: java.lang.Iterable<androidx.work.impl.model.WorkSpec>): void;
            public setCallback(param0: androidx.work.impl.constraints.controllers.ConstraintController.OnConstraintUpdatedCallback): void;
            public reset(): void;
          }
          export module ConstraintController {
            export class OnConstraintUpdatedCallback {
              public static class: java.lang.Class<androidx.work.impl.constraints.controllers.ConstraintController.OnConstraintUpdatedCallback>;
              /**
               * Constructs a new instance of the androidx.work.impl.constraints.controllers.ConstraintController$OnConstraintUpdatedCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                onConstraintMet(param0: java.util.List<string>): void;
                onConstraintNotMet(param0: java.util.List<string>): void;
              });
              public constructor();
              public onConstraintNotMet(param0: java.util.List<string>): void;
              public onConstraintMet(param0: java.util.List<string>): void;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module constraints {
        export module controllers {
          export class NetworkConnectedController extends androidx.work.impl.constraints.controllers.ConstraintController<androidx.work.impl.constraints.NetworkState> {
            public static class: java.lang.Class<androidx.work.impl.constraints.controllers.NetworkConnectedController>;
            public constructor(param0: globalAndroid.content.Context, param1: androidx.work.impl.utils.taskexecutor.TaskExecutor);
            public onConstraintChanged(param0: any): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module constraints {
        export module controllers {
          export class NetworkMeteredController extends androidx.work.impl.constraints.controllers.ConstraintController<androidx.work.impl.constraints.NetworkState> {
            public static class: java.lang.Class<androidx.work.impl.constraints.controllers.NetworkMeteredController>;
            public constructor(param0: globalAndroid.content.Context, param1: androidx.work.impl.utils.taskexecutor.TaskExecutor);
            public onConstraintChanged(param0: any): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module constraints {
        export module controllers {
          export class NetworkNotRoamingController extends androidx.work.impl.constraints.controllers.ConstraintController<androidx.work.impl.constraints.NetworkState> {
            public static class: java.lang.Class<androidx.work.impl.constraints.controllers.NetworkNotRoamingController>;
            public constructor(param0: globalAndroid.content.Context, param1: androidx.work.impl.utils.taskexecutor.TaskExecutor);
            public onConstraintChanged(param0: any): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module constraints {
        export module controllers {
          export class NetworkUnmeteredController extends androidx.work.impl.constraints.controllers.ConstraintController<androidx.work.impl.constraints.NetworkState> {
            public static class: java.lang.Class<androidx.work.impl.constraints.controllers.NetworkUnmeteredController>;
            public constructor(param0: globalAndroid.content.Context, param1: androidx.work.impl.utils.taskexecutor.TaskExecutor);
            public onConstraintChanged(param0: any): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module constraints {
        export module controllers {
          export class StorageNotLowController extends androidx.work.impl.constraints.controllers.ConstraintController<java.lang.Boolean> {
            public static class: java.lang.Class<androidx.work.impl.constraints.controllers.StorageNotLowController>;
            public constructor(param0: globalAndroid.content.Context, param1: androidx.work.impl.utils.taskexecutor.TaskExecutor);
            public onConstraintChanged(param0: any): void;
          }
        }
      }
    }
  }
}


declare module androidx {
  export module work {
    export module impl {
      export module constraints {
        export module trackers {
          export class BatteryChargingTracker extends androidx.work.impl.constraints.trackers.BroadcastReceiverConstraintTracker<java.lang.Boolean> {
            public static class: java.lang.Class<androidx.work.impl.constraints.trackers.BatteryChargingTracker>;
            public constructor(param0: globalAndroid.content.Context, param1: androidx.work.impl.utils.taskexecutor.TaskExecutor);
            public getInitialState(): any;
            public getInitialState(): java.lang.Boolean;
            public onBroadcastReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
            public getIntentFilter(): globalAndroid.content.IntentFilter;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module constraints {
        export module trackers {
          export class BatteryNotLowTracker extends androidx.work.impl.constraints.trackers.BroadcastReceiverConstraintTracker<java.lang.Boolean> {
            public static class: java.lang.Class<androidx.work.impl.constraints.trackers.BatteryNotLowTracker>;
            public constructor(param0: globalAndroid.content.Context, param1: androidx.work.impl.utils.taskexecutor.TaskExecutor);
            public getInitialState(): any;
            public getInitialState(): java.lang.Boolean;
            public onBroadcastReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
            public getIntentFilter(): globalAndroid.content.IntentFilter;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module constraints {
        export module trackers {
          export abstract class BroadcastReceiverConstraintTracker<T> extends androidx.work.impl.constraints.trackers.ConstraintTracker<any> {
            public static class: java.lang.Class<androidx.work.impl.constraints.trackers.BroadcastReceiverConstraintTracker<any>>;
            public constructor(param0: globalAndroid.content.Context, param1: androidx.work.impl.utils.taskexecutor.TaskExecutor);
            public stopTracking(): void;
            public onBroadcastReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
            public startTracking(): void;
            public getIntentFilter(): globalAndroid.content.IntentFilter;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module constraints {
        export module trackers {
          export abstract class ConstraintTracker<T> extends java.lang.Object {
            public static class: java.lang.Class<androidx.work.impl.constraints.trackers.ConstraintTracker<any>>;
            public mTaskExecutor: androidx.work.impl.utils.taskexecutor.TaskExecutor;
            public mAppContext: globalAndroid.content.Context;
            public stopTracking(): void;
            public setState(param0: T): void;
            public addListener(param0: androidx.work.impl.constraints.ConstraintListener<T>): void;
            public removeListener(param0: androidx.work.impl.constraints.ConstraintListener<T>): void;
            public startTracking(): void;
            public getInitialState(): T;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module constraints {
        export module trackers {
          export class NetworkStateTracker extends androidx.work.impl.constraints.trackers.ConstraintTracker<androidx.work.impl.constraints.NetworkState> {
            public static class: java.lang.Class<androidx.work.impl.constraints.trackers.NetworkStateTracker>;
            public constructor(param0: globalAndroid.content.Context, param1: androidx.work.impl.utils.taskexecutor.TaskExecutor);
            public getInitialState(): any;
            public stopTracking(): void;
            public startTracking(): void;
            public getInitialState(): androidx.work.impl.constraints.NetworkState;
          }
          export module NetworkStateTracker {
            export class NetworkStateBroadcastReceiver {
              public static class: java.lang.Class<androidx.work.impl.constraints.trackers.NetworkStateTracker.NetworkStateBroadcastReceiver>;
              public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
            }
            export class NetworkStateCallback {
              public static class: java.lang.Class<androidx.work.impl.constraints.trackers.NetworkStateTracker.NetworkStateCallback>;
              public onLost(param0: globalAndroid.net.Network): void;
              public onCapabilitiesChanged(param0: globalAndroid.net.Network, param1: globalAndroid.net.NetworkCapabilities): void;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module constraints {
        export module trackers {
          export class StorageNotLowTracker extends androidx.work.impl.constraints.trackers.BroadcastReceiverConstraintTracker<java.lang.Boolean> {
            public static class: java.lang.Class<androidx.work.impl.constraints.trackers.StorageNotLowTracker>;
            public constructor(param0: globalAndroid.content.Context, param1: androidx.work.impl.utils.taskexecutor.TaskExecutor);
            public getInitialState(): any;
            public getInitialState(): java.lang.Boolean;
            public onBroadcastReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
            public getIntentFilter(): globalAndroid.content.IntentFilter;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module constraints {
        export module trackers {
          export class Trackers {
            public static class: java.lang.Class<androidx.work.impl.constraints.trackers.Trackers>;
            public static setInstance(param0: androidx.work.impl.constraints.trackers.Trackers): void;
            public getStorageNotLowTracker(): androidx.work.impl.constraints.trackers.StorageNotLowTracker;
            public getBatteryNotLowTracker(): androidx.work.impl.constraints.trackers.BatteryNotLowTracker;
            public getBatteryChargingTracker(): androidx.work.impl.constraints.trackers.BatteryChargingTracker;
            public getNetworkStateTracker(): androidx.work.impl.constraints.trackers.NetworkStateTracker;
            public static getInstance(param0: globalAndroid.content.Context, param1: androidx.work.impl.utils.taskexecutor.TaskExecutor): androidx.work.impl.constraints.trackers.Trackers;
          }
        }
      }
    }
  }
}


declare module androidx {
  export module work {
    export module impl {
      export module diagnostics {
        export class DiagnosticsReceiver {
          public static class: java.lang.Class<androidx.work.impl.diagnostics.DiagnosticsReceiver>;
          public constructor();
          public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module foreground {
        export class ForegroundProcessor {
          public static class: java.lang.Class<androidx.work.impl.foreground.ForegroundProcessor>;
          /**
           * Constructs a new instance of the androidx.work.impl.foreground.ForegroundProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            startForeground(param0: string, param1: androidx.work.ForegroundInfo): void;
            stopForeground(param0: string): void;
          });
          public constructor();
          public startForeground(param0: string, param1: androidx.work.ForegroundInfo): void;
          public stopForeground(param0: string): void;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module foreground {
        export class SystemForegroundDispatcher implements androidx.work.impl.constraints.WorkConstraintsCallback, androidx.work.impl.ExecutionListener {
          public static class: java.lang.Class<androidx.work.impl.foreground.SystemForegroundDispatcher>;
          public static createNotifyIntent(param0: globalAndroid.content.Context, param1: string, param2: androidx.work.ForegroundInfo): globalAndroid.content.Intent;
          public onAllConstraintsMet(param0: java.util.List<string>): void;
          public onAllConstraintsNotMet(param0: java.util.List<string>): void;
          public onExecuted(param0: string, param1: boolean): void;
          public static createCancelWorkIntent(param0: globalAndroid.content.Context, param1: string): globalAndroid.content.Intent;
          public static createStartForegroundIntent(param0: globalAndroid.content.Context, param1: string, param2: androidx.work.ForegroundInfo): globalAndroid.content.Intent;
          public static createStopForegroundIntent(param0: globalAndroid.content.Context): globalAndroid.content.Intent;
        }
        export module SystemForegroundDispatcher {
          export class Callback {
            public static class: java.lang.Class<androidx.work.impl.foreground.SystemForegroundDispatcher.Callback>;
            /**
             * Constructs a new instance of the androidx.work.impl.foreground.SystemForegroundDispatcher$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              startForeground(param0: number, param1: number, param2: globalAndroid.app.Notification): void;
              notify(param0: number, param1: globalAndroid.app.Notification): void;
              cancelNotification(param0: number): void;
              stop(): void;
            });
            public constructor();
            public startForeground(param0: number, param1: number, param2: globalAndroid.app.Notification): void;
            public cancelNotification(param0: number): void;
            public stop(): void;
            public notify(param0: number, param1: globalAndroid.app.Notification): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module foreground {
        export class SystemForegroundService implements androidx.work.impl.foreground.SystemForegroundDispatcher.Callback {
          public static class: java.lang.Class<androidx.work.impl.foreground.SystemForegroundService>;
          public onCreate(): void;
          public startForeground(param0: number, param1: number, param2: globalAndroid.app.Notification): void;
          public notify(param0: number, param1: globalAndroid.app.Notification): void;
          public constructor();
          public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
          public stop(): void;
          public static getInstance(): androidx.work.impl.foreground.SystemForegroundService;
          public cancelNotification(param0: number): void;
          public onDestroy(): void;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module model {
        export class Dependency {
          public static class: java.lang.Class<androidx.work.impl.model.Dependency>;
          public workSpecId: string;
          public prerequisiteId: string;
          public constructor(param0: string, param1: string);
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module model {
        export class DependencyDao {
          public static class: java.lang.Class<androidx.work.impl.model.DependencyDao>;
          /**
           * Constructs a new instance of the androidx.work.impl.model.DependencyDao interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            insertDependency(param0: androidx.work.impl.model.Dependency): void;
            hasCompletedAllPrerequisites(param0: string): boolean;
            getPrerequisites(param0: string): java.util.List<string>;
            getDependentWorkIds(param0: string): java.util.List<string>;
            hasDependents(param0: string): boolean;
          });
          public constructor();
          public hasDependents(param0: string): boolean;
          public hasCompletedAllPrerequisites(param0: string): boolean;
          public insertDependency(param0: androidx.work.impl.model.Dependency): void;
          public getPrerequisites(param0: string): java.util.List<string>;
          public getDependentWorkIds(param0: string): java.util.List<string>;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module model {
        export class DependencyDao_Impl extends androidx.work.impl.model.DependencyDao {
          public static class: java.lang.Class<androidx.work.impl.model.DependencyDao_Impl>;
          public hasDependents(param0: string): boolean;
          public hasCompletedAllPrerequisites(param0: string): boolean;
          public insertDependency(param0: androidx.work.impl.model.Dependency): void;
          public getPrerequisites(param0: string): java.util.List<string>;
          public constructor(param0: androidx.room.RoomDatabase);
          public getDependentWorkIds(param0: string): java.util.List<string>;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module model {
        export class Preference {
          public static class: java.lang.Class<androidx.work.impl.model.Preference>;
          public mKey: string;
          public mValue: java.lang.Long;
          public equals(param0: any): boolean;
          public constructor(param0: string, param1: number);
          public constructor(param0: string, param1: boolean);
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module model {
        export class PreferenceDao {
          public static class: java.lang.Class<androidx.work.impl.model.PreferenceDao>;
          /**
           * Constructs a new instance of the androidx.work.impl.model.PreferenceDao interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            insertPreference(param0: androidx.work.impl.model.Preference): void;
            getLongValue(param0: string): java.lang.Long;
            getObservableLongValue(param0: string): androidx.lifecycle.LiveData<java.lang.Long>;
          });
          public constructor();
          public getObservableLongValue(param0: string): androidx.lifecycle.LiveData<java.lang.Long>;
          public insertPreference(param0: androidx.work.impl.model.Preference): void;
          public getLongValue(param0: string): java.lang.Long;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module model {
        export class PreferenceDao_Impl extends androidx.work.impl.model.PreferenceDao {
          public static class: java.lang.Class<androidx.work.impl.model.PreferenceDao_Impl>;
          public getObservableLongValue(param0: string): androidx.lifecycle.LiveData<java.lang.Long>;
          public insertPreference(param0: androidx.work.impl.model.Preference): void;
          public getLongValue(param0: string): java.lang.Long;
          public constructor(param0: androidx.room.RoomDatabase);
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module model {
        export class RawWorkInfoDao {
          public static class: java.lang.Class<androidx.work.impl.model.RawWorkInfoDao>;
          /**
           * Constructs a new instance of the androidx.work.impl.model.RawWorkInfoDao interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            getWorkInfoPojos(param0: androidx.sqlite.db.SupportSQLiteQuery): java.util.List<androidx.work.impl.model.WorkSpec.WorkInfoPojo>;
            getWorkInfoPojosLiveData(param0: androidx.sqlite.db.SupportSQLiteQuery): androidx.lifecycle.LiveData<java.util.List<androidx.work.impl.model.WorkSpec.WorkInfoPojo>>;
          });
          public constructor();
          public getWorkInfoPojos(param0: androidx.sqlite.db.SupportSQLiteQuery): java.util.List<androidx.work.impl.model.WorkSpec.WorkInfoPojo>;
          public getWorkInfoPojosLiveData(param0: androidx.sqlite.db.SupportSQLiteQuery): androidx.lifecycle.LiveData<java.util.List<androidx.work.impl.model.WorkSpec.WorkInfoPojo>>;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module model {
        export class RawWorkInfoDao_Impl extends androidx.work.impl.model.RawWorkInfoDao {
          public static class: java.lang.Class<androidx.work.impl.model.RawWorkInfoDao_Impl>;
          public getWorkInfoPojos(param0: androidx.sqlite.db.SupportSQLiteQuery): java.util.List<androidx.work.impl.model.WorkSpec.WorkInfoPojo>;
          public getWorkInfoPojosLiveData(param0: androidx.sqlite.db.SupportSQLiteQuery): androidx.lifecycle.LiveData<java.util.List<androidx.work.impl.model.WorkSpec.WorkInfoPojo>>;
          public constructor(param0: androidx.room.RoomDatabase);
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module model {
        export class SystemIdInfo {
          public static class: java.lang.Class<androidx.work.impl.model.SystemIdInfo>;
          public workSpecId: string;
          public systemId: number;
          public equals(param0: any): boolean;
          public constructor(param0: string, param1: number);
          public hashCode(): number;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module model {
        export class SystemIdInfoDao {
          public static class: java.lang.Class<androidx.work.impl.model.SystemIdInfoDao>;
          /**
           * Constructs a new instance of the androidx.work.impl.model.SystemIdInfoDao interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            insertSystemIdInfo(param0: androidx.work.impl.model.SystemIdInfo): void;
            getSystemIdInfo(param0: string): androidx.work.impl.model.SystemIdInfo;
            removeSystemIdInfo(param0: string): void;
            getWorkSpecIds(): java.util.List<string>;
          });
          public constructor();
          public insertSystemIdInfo(param0: androidx.work.impl.model.SystemIdInfo): void;
          public removeSystemIdInfo(param0: string): void;
          public getSystemIdInfo(param0: string): androidx.work.impl.model.SystemIdInfo;
          public getWorkSpecIds(): java.util.List<string>;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module model {
        export class SystemIdInfoDao_Impl extends androidx.work.impl.model.SystemIdInfoDao {
          public static class: java.lang.Class<androidx.work.impl.model.SystemIdInfoDao_Impl>;
          public insertSystemIdInfo(param0: androidx.work.impl.model.SystemIdInfo): void;
          public removeSystemIdInfo(param0: string): void;
          public getSystemIdInfo(param0: string): androidx.work.impl.model.SystemIdInfo;
          public constructor(param0: androidx.room.RoomDatabase);
          public getWorkSpecIds(): java.util.List<string>;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module model {
        export class WorkName {
          public static class: java.lang.Class<androidx.work.impl.model.WorkName>;
          public name: string;
          public workSpecId: string;
          public constructor(param0: string, param1: string);
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module model {
        export class WorkNameDao {
          public static class: java.lang.Class<androidx.work.impl.model.WorkNameDao>;
          /**
           * Constructs a new instance of the androidx.work.impl.model.WorkNameDao interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            insert(param0: androidx.work.impl.model.WorkName): void;
            getWorkSpecIdsWithName(param0: string): java.util.List<string>;
            getNamesForWorkSpecId(param0: string): java.util.List<string>;
          });
          public constructor();
          public insert(param0: androidx.work.impl.model.WorkName): void;
          public getWorkSpecIdsWithName(param0: string): java.util.List<string>;
          public getNamesForWorkSpecId(param0: string): java.util.List<string>;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module model {
        export class WorkNameDao_Impl extends androidx.work.impl.model.WorkNameDao {
          public static class: java.lang.Class<androidx.work.impl.model.WorkNameDao_Impl>;
          public insert(param0: androidx.work.impl.model.WorkName): void;
          public getWorkSpecIdsWithName(param0: string): java.util.List<string>;
          public getNamesForWorkSpecId(param0: string): java.util.List<string>;
          public constructor(param0: androidx.room.RoomDatabase);
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module model {
        export class WorkProgress {
          public static class: java.lang.Class<androidx.work.impl.model.WorkProgress>;
          public mWorkSpecId: string;
          public mProgress: androidx.work.Data;
          public constructor(param0: string, param1: androidx.work.Data);
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module model {
        export class WorkProgressDao {
          public static class: java.lang.Class<androidx.work.impl.model.WorkProgressDao>;
          /**
           * Constructs a new instance of the androidx.work.impl.model.WorkProgressDao interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            insert(param0: androidx.work.impl.model.WorkProgress): void;
            delete(param0: string): void;
            deleteAll(): void;
            getProgressForWorkSpecId(param0: string): androidx.work.Data;
            getProgressForWorkSpecIds(param0: java.util.List<string>): java.util.List<androidx.work.Data>;
          });
          public constructor();
          public insert(param0: androidx.work.impl.model.WorkProgress): void;
          public deleteAll(): void;
          public getProgressForWorkSpecIds(param0: java.util.List<string>): java.util.List<androidx.work.Data>;
          public getProgressForWorkSpecId(param0: string): androidx.work.Data;
          public delete(param0: string): void;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module model {
        export class WorkProgressDao_Impl extends androidx.work.impl.model.WorkProgressDao {
          public static class: java.lang.Class<androidx.work.impl.model.WorkProgressDao_Impl>;
          public insert(param0: androidx.work.impl.model.WorkProgress): void;
          public deleteAll(): void;
          public getProgressForWorkSpecIds(param0: java.util.List<string>): java.util.List<androidx.work.Data>;
          public getProgressForWorkSpecId(param0: string): androidx.work.Data;
          public delete(param0: string): void;
          public constructor(param0: androidx.room.RoomDatabase);
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module model {
        export class WorkSpec {
          public static class: java.lang.Class<androidx.work.impl.model.WorkSpec>;
          public static SCHEDULE_NOT_REQUESTED_YET: number;
          public id: string;
          public state: androidx.work.WorkInfo.State;
          public workerClassName: string;
          public inputMergerClassName: string;
          public input: androidx.work.Data;
          public output: androidx.work.Data;
          public initialDelay: number;
          public intervalDuration: number;
          public flexDuration: number;
          public constraints: androidx.work.Constraints;
          public runAttemptCount: number;
          public backoffPolicy: androidx.work.BackoffPolicy;
          public backoffDelayDuration: number;
          public periodStartTime: number;
          public minimumRetentionDuration: number;
          public scheduleRequestedAt: number;
          public runInForeground: boolean;
          public static WORK_INFO_MAPPER: androidx.arch.core.util.Function<java.util.List<androidx.work.impl.model.WorkSpec.WorkInfoPojo>, java.util.List<androidx.work.WorkInfo>>;
          public constructor(param0: string, param1: string);
          public setPeriodic(param0: number): void;
          public equals(param0: any): boolean;
          public toString(): string;
          public hasConstraints(): boolean;
          public calculateNextRunTime(): number;
          public constructor(param0: androidx.work.impl.model.WorkSpec);
          public setBackoffDelayDuration(param0: number): void;
          public setPeriodic(param0: number, param1: number): void;
          public hashCode(): number;
          public isPeriodic(): boolean;
          public isBackedOff(): boolean;
        }
        export module WorkSpec {
          export class IdAndState {
            public static class: java.lang.Class<androidx.work.impl.model.WorkSpec.IdAndState>;
            public id: string;
            public state: androidx.work.WorkInfo.State;
            public constructor();
            public equals(param0: any): boolean;
            public hashCode(): number;
          }
          export class WorkInfoPojo {
            public static class: java.lang.Class<androidx.work.impl.model.WorkSpec.WorkInfoPojo>;
            public id: string;
            public state: androidx.work.WorkInfo.State;
            public output: androidx.work.Data;
            public runAttemptCount: number;
            public tags: java.util.List<string>;
            public progress: java.util.List<androidx.work.Data>;
            public constructor();
            public equals(param0: any): boolean;
            public hashCode(): number;
            public toWorkInfo(): androidx.work.WorkInfo;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module model {
        export class WorkSpecDao {
          public static class: java.lang.Class<androidx.work.impl.model.WorkSpecDao>;
          /**
           * Constructs a new instance of the androidx.work.impl.model.WorkSpecDao interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            insertWorkSpec(param0: androidx.work.impl.model.WorkSpec): void;
            delete(param0: string): void;
            getWorkSpec(param0: string): androidx.work.impl.model.WorkSpec;
            getWorkSpecs(param0: java.util.List<string>): native.Array<androidx.work.impl.model.WorkSpec>;
            getWorkSpecIdAndStatesForName(param0: string): java.util.List<androidx.work.impl.model.WorkSpec.IdAndState>;
            getAllWorkSpecIds(): java.util.List<string>;
            getAllWorkSpecIdsLiveData(): androidx.lifecycle.LiveData<java.util.List<string>>;
            setState(param0: androidx.work.WorkInfo.State, param1: native.Array<string>): number;
            setOutput(param0: string, param1: androidx.work.Data): void;
            setPeriodStartTime(param0: string, param1: number): void;
            incrementWorkSpecRunAttemptCount(param0: string): number;
            resetWorkSpecRunAttemptCount(param0: string): number;
            getState(param0: string): androidx.work.WorkInfo.State;
            getWorkStatusPojoForId(param0: string): androidx.work.impl.model.WorkSpec.WorkInfoPojo;
            getWorkStatusPojoForIds(param0: java.util.List<string>): java.util.List<androidx.work.impl.model.WorkSpec.WorkInfoPojo>;
            getWorkStatusPojoLiveDataForIds(param0: java.util.List<string>): androidx.lifecycle.LiveData<java.util.List<androidx.work.impl.model.WorkSpec.WorkInfoPojo>>;
            getWorkStatusPojoForTag(param0: string): java.util.List<androidx.work.impl.model.WorkSpec.WorkInfoPojo>;
            getWorkStatusPojoLiveDataForTag(param0: string): androidx.lifecycle.LiveData<java.util.List<androidx.work.impl.model.WorkSpec.WorkInfoPojo>>;
            getWorkStatusPojoForName(param0: string): java.util.List<androidx.work.impl.model.WorkSpec.WorkInfoPojo>;
            getWorkStatusPojoLiveDataForName(param0: string): androidx.lifecycle.LiveData<java.util.List<androidx.work.impl.model.WorkSpec.WorkInfoPojo>>;
            getInputsFromPrerequisites(param0: string): java.util.List<androidx.work.Data>;
            getUnfinishedWorkWithTag(param0: string): java.util.List<string>;
            getUnfinishedWorkWithName(param0: string): java.util.List<string>;
            getAllUnfinishedWork(): java.util.List<string>;
            markWorkSpecScheduled(param0: string, param1: number): number;
            getScheduleRequestedAtLiveData(param0: string): androidx.lifecycle.LiveData<java.lang.Long>;
            resetScheduledState(): number;
            getEligibleWorkForScheduling(param0: number): java.util.List<androidx.work.impl.model.WorkSpec>;
            getAllEligibleWorkSpecsForScheduling(param0: number): java.util.List<androidx.work.impl.model.WorkSpec>;
            getScheduledWork(): java.util.List<androidx.work.impl.model.WorkSpec>;
            getRunningWork(): java.util.List<androidx.work.impl.model.WorkSpec>;
            getRecentlyCompletedWork(param0: number): java.util.List<androidx.work.impl.model.WorkSpec>;
            pruneFinishedWorkWithZeroDependentsIgnoringKeepForAtLeast(): void;
          });
          public constructor();
          public setOutput(param0: string, param1: androidx.work.Data): void;
          public getScheduleRequestedAtLiveData(param0: string): androidx.lifecycle.LiveData<java.lang.Long>;
          public getUnfinishedWorkWithTag(param0: string): java.util.List<string>;
          public incrementWorkSpecRunAttemptCount(param0: string): number;
          public getInputsFromPrerequisites(param0: string): java.util.List<androidx.work.Data>;
          public getAllUnfinishedWork(): java.util.List<string>;
          public getWorkSpecs(param0: java.util.List<string>): native.Array<androidx.work.impl.model.WorkSpec>;
          public getAllEligibleWorkSpecsForScheduling(param0: number): java.util.List<androidx.work.impl.model.WorkSpec>;
          public getRunningWork(): java.util.List<androidx.work.impl.model.WorkSpec>;
          public getState(param0: string): androidx.work.WorkInfo.State;
          public markWorkSpecScheduled(param0: string, param1: number): number;
          public getAllWorkSpecIds(): java.util.List<string>;
          public getWorkStatusPojoLiveDataForTag(param0: string): androidx.lifecycle.LiveData<java.util.List<androidx.work.impl.model.WorkSpec.WorkInfoPojo>>;
          public getWorkSpec(param0: string): androidx.work.impl.model.WorkSpec;
          public setState(param0: androidx.work.WorkInfo.State, param1: native.Array<string>): number;
          public getWorkSpecIdAndStatesForName(param0: string): java.util.List<androidx.work.impl.model.WorkSpec.IdAndState>;
          public getAllWorkSpecIdsLiveData(): androidx.lifecycle.LiveData<java.util.List<string>>;
          public delete(param0: string): void;
          public setPeriodStartTime(param0: string, param1: number): void;
          public getEligibleWorkForScheduling(param0: number): java.util.List<androidx.work.impl.model.WorkSpec>;
          public getWorkStatusPojoLiveDataForIds(param0: java.util.List<string>): androidx.lifecycle.LiveData<java.util.List<androidx.work.impl.model.WorkSpec.WorkInfoPojo>>;
          public getWorkStatusPojoForTag(param0: string): java.util.List<androidx.work.impl.model.WorkSpec.WorkInfoPojo>;
          public getWorkStatusPojoLiveDataForName(param0: string): androidx.lifecycle.LiveData<java.util.List<androidx.work.impl.model.WorkSpec.WorkInfoPojo>>;
          public getWorkStatusPojoForIds(param0: java.util.List<string>): java.util.List<androidx.work.impl.model.WorkSpec.WorkInfoPojo>;
          public getWorkStatusPojoForName(param0: string): java.util.List<androidx.work.impl.model.WorkSpec.WorkInfoPojo>;
          public pruneFinishedWorkWithZeroDependentsIgnoringKeepForAtLeast(): void;
          public resetWorkSpecRunAttemptCount(param0: string): number;
          public getScheduledWork(): java.util.List<androidx.work.impl.model.WorkSpec>;
          public resetScheduledState(): number;
          public insertWorkSpec(param0: androidx.work.impl.model.WorkSpec): void;
          public getWorkStatusPojoForId(param0: string): androidx.work.impl.model.WorkSpec.WorkInfoPojo;
          public getUnfinishedWorkWithName(param0: string): java.util.List<string>;
          public getRecentlyCompletedWork(param0: number): java.util.List<androidx.work.impl.model.WorkSpec>;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module model {
        export class WorkSpecDao_Impl extends androidx.work.impl.model.WorkSpecDao {
          public static class: java.lang.Class<androidx.work.impl.model.WorkSpecDao_Impl>;
          public setOutput(param0: string, param1: androidx.work.Data): void;
          public getScheduleRequestedAtLiveData(param0: string): androidx.lifecycle.LiveData<java.lang.Long>;
          public getUnfinishedWorkWithTag(param0: string): java.util.List<string>;
          public incrementWorkSpecRunAttemptCount(param0: string): number;
          public getInputsFromPrerequisites(param0: string): java.util.List<androidx.work.Data>;
          public getAllUnfinishedWork(): java.util.List<string>;
          public getWorkSpecs(param0: java.util.List<string>): native.Array<androidx.work.impl.model.WorkSpec>;
          public getAllEligibleWorkSpecsForScheduling(param0: number): java.util.List<androidx.work.impl.model.WorkSpec>;
          public getRunningWork(): java.util.List<androidx.work.impl.model.WorkSpec>;
          public getState(param0: string): androidx.work.WorkInfo.State;
          public markWorkSpecScheduled(param0: string, param1: number): number;
          public getAllWorkSpecIds(): java.util.List<string>;
          public getWorkStatusPojoLiveDataForTag(param0: string): androidx.lifecycle.LiveData<java.util.List<androidx.work.impl.model.WorkSpec.WorkInfoPojo>>;
          public getWorkSpec(param0: string): androidx.work.impl.model.WorkSpec;
          public setState(param0: androidx.work.WorkInfo.State, param1: native.Array<string>): number;
          public getWorkSpecIdAndStatesForName(param0: string): java.util.List<androidx.work.impl.model.WorkSpec.IdAndState>;
          public getAllWorkSpecIdsLiveData(): androidx.lifecycle.LiveData<java.util.List<string>>;
          public delete(param0: string): void;
          public setPeriodStartTime(param0: string, param1: number): void;
          public getEligibleWorkForScheduling(param0: number): java.util.List<androidx.work.impl.model.WorkSpec>;
          public getWorkStatusPojoLiveDataForIds(param0: java.util.List<string>): androidx.lifecycle.LiveData<java.util.List<androidx.work.impl.model.WorkSpec.WorkInfoPojo>>;
          public getWorkStatusPojoForTag(param0: string): java.util.List<androidx.work.impl.model.WorkSpec.WorkInfoPojo>;
          public getWorkStatusPojoLiveDataForName(param0: string): androidx.lifecycle.LiveData<java.util.List<androidx.work.impl.model.WorkSpec.WorkInfoPojo>>;
          public getWorkStatusPojoForIds(param0: java.util.List<string>): java.util.List<androidx.work.impl.model.WorkSpec.WorkInfoPojo>;
          public pruneFinishedWorkWithZeroDependentsIgnoringKeepForAtLeast(): void;
          public getWorkStatusPojoForName(param0: string): java.util.List<androidx.work.impl.model.WorkSpec.WorkInfoPojo>;
          public resetWorkSpecRunAttemptCount(param0: string): number;
          public getScheduledWork(): java.util.List<androidx.work.impl.model.WorkSpec>;
          public resetScheduledState(): number;
          public insertWorkSpec(param0: androidx.work.impl.model.WorkSpec): void;
          public getWorkStatusPojoForId(param0: string): androidx.work.impl.model.WorkSpec.WorkInfoPojo;
          public getUnfinishedWorkWithName(param0: string): java.util.List<string>;
          public getRecentlyCompletedWork(param0: number): java.util.List<androidx.work.impl.model.WorkSpec>;
          public constructor(param0: androidx.room.RoomDatabase);
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module model {
        export class WorkTag {
          public static class: java.lang.Class<androidx.work.impl.model.WorkTag>;
          public tag: string;
          public workSpecId: string;
          public constructor(param0: string, param1: string);
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module model {
        export class WorkTagDao {
          public static class: java.lang.Class<androidx.work.impl.model.WorkTagDao>;
          /**
           * Constructs a new instance of the androidx.work.impl.model.WorkTagDao interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: {
            insert(param0: androidx.work.impl.model.WorkTag): void;
            getWorkSpecIdsWithTag(param0: string): java.util.List<string>;
            getTagsForWorkSpecId(param0: string): java.util.List<string>;
          });
          public constructor();
          public getWorkSpecIdsWithTag(param0: string): java.util.List<string>;
          public getTagsForWorkSpecId(param0: string): java.util.List<string>;
          public insert(param0: androidx.work.impl.model.WorkTag): void;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module model {
        export class WorkTagDao_Impl extends androidx.work.impl.model.WorkTagDao {
          public static class: java.lang.Class<androidx.work.impl.model.WorkTagDao_Impl>;
          public getWorkSpecIdsWithTag(param0: string): java.util.List<string>;
          public getTagsForWorkSpecId(param0: string): java.util.List<string>;
          public constructor(param0: androidx.room.RoomDatabase);
          public insert(param0: androidx.work.impl.model.WorkTag): void;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module model {
        export class WorkTypeConverters {
          public static class: java.lang.Class<androidx.work.impl.model.WorkTypeConverters>;
          public static networkTypeToInt(param0: androidx.work.NetworkType): number;
          public static intToNetworkType(param0: number): androidx.work.NetworkType;
          public static contentUriTriggersToByteArray(param0: androidx.work.ContentUriTriggers): native.Array<number>;
          public static byteArrayToContentUriTriggers(param0: native.Array<number>): androidx.work.ContentUriTriggers;
          public static intToState(param0: number): androidx.work.WorkInfo.State;
          public static intToBackoffPolicy(param0: number): androidx.work.BackoffPolicy;
          public static backoffPolicyToInt(param0: androidx.work.BackoffPolicy): number;
          public static stateToInt(param0: androidx.work.WorkInfo.State): number;
        }
        export module WorkTypeConverters {
          export class BackoffPolicyIds {
            public static class: java.lang.Class<androidx.work.impl.model.WorkTypeConverters.BackoffPolicyIds>;
            /**
             * Constructs a new instance of the androidx.work.impl.model.WorkTypeConverters$BackoffPolicyIds interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
            });
            public constructor();
            public static EXPONENTIAL: number;
            public static LINEAR: number;
          }
          export class NetworkTypeIds {
            public static class: java.lang.Class<androidx.work.impl.model.WorkTypeConverters.NetworkTypeIds>;
            /**
             * Constructs a new instance of the androidx.work.impl.model.WorkTypeConverters$NetworkTypeIds interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
            });
            public constructor();
            public static CONNECTED: number;
            public static UNMETERED: number;
            public static NOT_ROAMING: number;
            public static NOT_REQUIRED: number;
            public static METERED: number;
          }
          export class StateIds {
            public static class: java.lang.Class<androidx.work.impl.model.WorkTypeConverters.StateIds>;
            /**
             * Constructs a new instance of the androidx.work.impl.model.WorkTypeConverters$StateIds interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
            });
            public constructor();
            public static COMPLETED_STATES: string;
            public static BLOCKED: number;
            public static CANCELLED: number;
            public static ENQUEUED: number;
            public static RUNNING: number;
            public static FAILED: number;
            public static SUCCEEDED: number;
          }
        }
      }
    }
  }
}


declare module androidx {
  export module work {
    export module impl {
      export module utils {
        export abstract class CancelWorkRunnable {
          public static class: java.lang.Class<androidx.work.impl.utils.CancelWorkRunnable>;
          public static forName(param0: string, param1: androidx.work.impl.WorkManagerImpl, param2: boolean): androidx.work.impl.utils.CancelWorkRunnable;
          public getOperation(): androidx.work.Operation;
          public static forId(param0: java.util.UUID, param1: androidx.work.impl.WorkManagerImpl): androidx.work.impl.utils.CancelWorkRunnable;
          public constructor();
          public run(): void;
          public static forAll(param0: androidx.work.impl.WorkManagerImpl): androidx.work.impl.utils.CancelWorkRunnable;
          public static forTag(param0: string, param1: androidx.work.impl.WorkManagerImpl): androidx.work.impl.utils.CancelWorkRunnable;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module utils {
        export class EnqueueRunnable {
          public static class: java.lang.Class<androidx.work.impl.utils.EnqueueRunnable>;
          public addToDatabase(): boolean;
          public scheduleWorkInBackground(): void;
          public getOperation(): androidx.work.Operation;
          public run(): void;
          public constructor(param0: androidx.work.impl.WorkContinuationImpl);
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module utils {
        export class ForceStopRunnable {
          public static class: java.lang.Class<androidx.work.impl.utils.ForceStopRunnable>;
          public multiProcessChecks(): boolean;
          public sleep(param0: number): void;
          public constructor(param0: globalAndroid.content.Context, param1: androidx.work.impl.WorkManagerImpl);
          public run(): void;
          public forceStopRunnable(): void;
          public cleanUp(): boolean;
          public isForceStopped(): boolean;
        }
        export module ForceStopRunnable {
          export class BroadcastReceiver {
            public static class: java.lang.Class<androidx.work.impl.utils.ForceStopRunnable.BroadcastReceiver>;
            public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
            public constructor();
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module utils {
        export class IdGenerator {
          public static class: java.lang.Class<androidx.work.impl.utils.IdGenerator>;
          public static INITIAL_ID: number;
          public static PREFERENCE_FILE_KEY: string;
          public static NEXT_JOB_SCHEDULER_ID_KEY: string;
          public static NEXT_ALARM_MANAGER_ID_KEY: string;
          public nextJobSchedulerIdWithRange(param0: number, param1: number): number;
          public nextAlarmManagerId(): number;
          public constructor(param0: androidx.work.impl.WorkDatabase);
          public static migrateLegacyIdGenerator(param0: globalAndroid.content.Context, param1: androidx.sqlite.db.SupportSQLiteDatabase): void;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module utils {
        export class LiveDataUtils {
          public static class: java.lang.Class<androidx.work.impl.utils.LiveDataUtils>;
          public static dedupedMappedLiveDataFor(param0: androidx.lifecycle.LiveData, param1: androidx.arch.core.util.Function, param2: androidx.work.impl.utils.taskexecutor.TaskExecutor): androidx.lifecycle.LiveData;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module utils {
        export class PackageManagerHelper {
          public static class: java.lang.Class<androidx.work.impl.utils.PackageManagerHelper>;
          public static isComponentExplicitlyEnabled(param0: globalAndroid.content.Context, param1: string): boolean;
          public static setComponentEnabled(param0: globalAndroid.content.Context, param1: java.lang.Class<any>, param2: boolean): void;
          public static isComponentExplicitlyEnabled(param0: globalAndroid.content.Context, param1: java.lang.Class<any>): boolean;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module utils {
        export class PreferenceUtils {
          public static class: java.lang.Class<androidx.work.impl.utils.PreferenceUtils>;
          public static PREFERENCES_FILE_NAME: string;
          public static KEY_LAST_CANCEL_ALL_TIME_MS: string;
          public static KEY_RESCHEDULE_NEEDED: string;
          public static migrateLegacyPreferences(param0: globalAndroid.content.Context, param1: androidx.sqlite.db.SupportSQLiteDatabase): void;
          public constructor(param0: androidx.work.impl.WorkDatabase);
          public getNeedsReschedule(): boolean;
          public getLastCancelAllTimeMillis(): number;
          public setNeedsReschedule(param0: boolean): void;
          public getLastCancelAllTimeMillisLiveData(): androidx.lifecycle.LiveData<java.lang.Long>;
          public setLastCancelAllTimeMillis(param0: number): void;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module utils {
        export class ProcessUtils {
          public static class: java.lang.Class<androidx.work.impl.utils.ProcessUtils>;
          public static isDefaultProcess(param0: globalAndroid.content.Context, param1: androidx.work.Configuration): boolean;
          public static getProcessName(param0: globalAndroid.content.Context): string;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module utils {
        export class PruneWorkRunnable {
          public static class: java.lang.Class<androidx.work.impl.utils.PruneWorkRunnable>;
          public getOperation(): androidx.work.Operation;
          public run(): void;
          public constructor(param0: androidx.work.impl.WorkManagerImpl);
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module utils {
        export class RawQueries {
          public static class: java.lang.Class<androidx.work.impl.utils.RawQueries>;
          public static workQueryToRawQuery(param0: androidx.work.WorkQuery): androidx.sqlite.db.SupportSQLiteQuery;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module utils {
        export class SerialExecutor {
          public static class: java.lang.Class<androidx.work.impl.utils.SerialExecutor>;
          public execute(param0: java.lang.Runnable): void;
          public constructor(param0: java.util.concurrent.Executor);
          public getDelegatedExecutor(): java.util.concurrent.Executor;
          public hasPendingTasks(): boolean;
        }
        export module SerialExecutor {
          export class Task {
            public static class: java.lang.Class<androidx.work.impl.utils.SerialExecutor.Task>;
            public run(): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module utils {
        export class StartWorkRunnable {
          public static class: java.lang.Class<androidx.work.impl.utils.StartWorkRunnable>;
          public run(): void;
          public constructor(param0: androidx.work.impl.WorkManagerImpl, param1: string, param2: androidx.work.WorkerParameters.RuntimeExtras);
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module utils {
        export abstract class StatusRunnable<T> extends java.lang.Runnable {
          public static class: java.lang.Class<androidx.work.impl.utils.StatusRunnable<any>>;
          public getFuture(): com.google.common.util.concurrent.ListenableFuture<any>;
          public static forUUID(param0: androidx.work.impl.WorkManagerImpl, param1: java.util.UUID): androidx.work.impl.utils.StatusRunnable<androidx.work.WorkInfo>;
          public constructor();
          public run(): void;
          public static forStringIds(param0: androidx.work.impl.WorkManagerImpl, param1: java.util.List<string>): androidx.work.impl.utils.StatusRunnable<java.util.List<androidx.work.WorkInfo>>;
          public static forTag(param0: androidx.work.impl.WorkManagerImpl, param1: string): androidx.work.impl.utils.StatusRunnable<java.util.List<androidx.work.WorkInfo>>;
          public static forWorkQuerySpec(param0: androidx.work.impl.WorkManagerImpl, param1: androidx.work.WorkQuery): androidx.work.impl.utils.StatusRunnable<java.util.List<androidx.work.WorkInfo>>;
          public static forUniqueWork(param0: androidx.work.impl.WorkManagerImpl, param1: string): androidx.work.impl.utils.StatusRunnable<java.util.List<androidx.work.WorkInfo>>;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module utils {
        export class StopWorkRunnable {
          public static class: java.lang.Class<androidx.work.impl.utils.StopWorkRunnable>;
          public constructor(param0: androidx.work.impl.WorkManagerImpl, param1: string, param2: boolean);
          public run(): void;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module utils {
        export class SynchronousExecutor {
          public static class: java.lang.Class<androidx.work.impl.utils.SynchronousExecutor>;
          public execute(param0: java.lang.Runnable): void;
          public constructor();
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module utils {
        export class WakeLocks {
          public static class: java.lang.Class<androidx.work.impl.utils.WakeLocks>;
          public static checkWakeLocks(): void;
          public static newWakeLock(param0: globalAndroid.content.Context, param1: string): globalAndroid.os.PowerManager.WakeLock;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module utils {
        export class WorkForegroundUpdater extends androidx.work.ForegroundUpdater {
          public static class: java.lang.Class<androidx.work.impl.utils.WorkForegroundUpdater>;
          public constructor(param0: androidx.work.impl.WorkDatabase, param1: androidx.work.impl.foreground.ForegroundProcessor, param2: androidx.work.impl.utils.taskexecutor.TaskExecutor);
          public setForegroundAsync(param0: globalAndroid.content.Context, param1: java.util.UUID, param2: androidx.work.ForegroundInfo): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module utils {
        export class WorkProgressUpdater extends androidx.work.ProgressUpdater {
          public static class: java.lang.Class<androidx.work.impl.utils.WorkProgressUpdater>;
          public constructor(param0: androidx.work.impl.WorkDatabase, param1: androidx.work.impl.utils.taskexecutor.TaskExecutor);
          public updateProgress(param0: globalAndroid.content.Context, param1: java.util.UUID, param2: androidx.work.Data): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module utils {
        export class WorkTimer {
          public static class: java.lang.Class<androidx.work.impl.utils.WorkTimer>;
          public startTimer(param0: string, param1: number, param2: androidx.work.impl.utils.WorkTimer.TimeLimitExceededListener): void;
          public constructor();
          public stopTimer(param0: string): void;
          public getTimerMap(): java.util.Map<string, androidx.work.impl.utils.WorkTimer.WorkTimerRunnable>;
          public onDestroy(): void;
          public getExecutorService(): java.util.concurrent.ScheduledExecutorService;
          public getListeners(): java.util.Map<string, androidx.work.impl.utils.WorkTimer.TimeLimitExceededListener>;
        }
        export module WorkTimer {
          export class TimeLimitExceededListener {
            public static class: java.lang.Class<androidx.work.impl.utils.WorkTimer.TimeLimitExceededListener>;
            /**
             * Constructs a new instance of the androidx.work.impl.utils.WorkTimer$TimeLimitExceededListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onTimeLimitExceeded(param0: string): void;
            });
            public constructor();
            public onTimeLimitExceeded(param0: string): void;
          }
          export class WorkTimerRunnable {
            public static class: java.lang.Class<androidx.work.impl.utils.WorkTimer.WorkTimerRunnable>;
            public run(): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module utils {
        export module futures {
          export abstract class AbstractFuture<V> extends com.google.common.util.concurrent.ListenableFuture<any> {
            public static class: java.lang.Class<androidx.work.impl.utils.futures.AbstractFuture<any>>;
            public constructor();
            public isCancelled(): boolean;
            public cancel(param0: boolean): boolean;
            public pendingToString(): string;
            public wasInterrupted(): boolean;
            public afterDone(): void;
            public get(): any;
            public addListener(param0: java.lang.Runnable, param1: java.util.concurrent.Executor): void;
            public toString(): string;
            public isDone(): boolean;
            public set(param0: any): boolean;
            public setFuture(param0: com.google.common.util.concurrent.ListenableFuture<any>): boolean;
            public get(param0: number, param1: java.util.concurrent.TimeUnit): any;
            public setException(param0: java.lang.Throwable): boolean;
            public interruptTask(): void;
          }
          export module AbstractFuture {
            export abstract class AtomicHelper {
              public static class: java.lang.Class<androidx.work.impl.utils.futures.AbstractFuture.AtomicHelper>;
            }
            export class Cancellation {
              public static class: java.lang.Class<androidx.work.impl.utils.futures.AbstractFuture.Cancellation>;
            }
            export class Failure {
              public static class: java.lang.Class<androidx.work.impl.utils.futures.AbstractFuture.Failure>;
            }
            export class Listener {
              public static class: java.lang.Class<androidx.work.impl.utils.futures.AbstractFuture.Listener>;
            }
            export class SafeAtomicHelper extends androidx.work.impl.utils.futures.AbstractFuture.AtomicHelper {
              public static class: java.lang.Class<androidx.work.impl.utils.futures.AbstractFuture.SafeAtomicHelper>;
            }
            export class SetFuture<V> extends java.lang.Runnable {
              public static class: java.lang.Class<androidx.work.impl.utils.futures.AbstractFuture.SetFuture<any>>;
              public run(): void;
            }
            export class SynchronizedHelper extends androidx.work.impl.utils.futures.AbstractFuture.AtomicHelper {
              public static class: java.lang.Class<androidx.work.impl.utils.futures.AbstractFuture.SynchronizedHelper>;
            }
            export class Waiter {
              public static class: java.lang.Class<androidx.work.impl.utils.futures.AbstractFuture.Waiter>;
            }
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module utils {
        export module futures {
          export class DirectExecutor extends java.util.concurrent.Executor {
            public static class: java.lang.Class<androidx.work.impl.utils.futures.DirectExecutor>;
            public static INSTANCE: androidx.work.impl.utils.futures.DirectExecutor;
            public execute(param0: java.lang.Runnable): void;
            public static valueOf(param0: string): androidx.work.impl.utils.futures.DirectExecutor;
            public static values(): native.Array<androidx.work.impl.utils.futures.DirectExecutor>;
            public toString(): string;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module utils {
        export module futures {
          export class SettableFuture<V> extends androidx.work.impl.utils.futures.AbstractFuture<any> {
            public static class: java.lang.Class<androidx.work.impl.utils.futures.SettableFuture<any>>;
            public static create(): androidx.work.impl.utils.futures.SettableFuture<any>;
            public set(param0: any): boolean;
            public setFuture(param0: com.google.common.util.concurrent.ListenableFuture<any>): boolean;
            public setException(param0: java.lang.Throwable): boolean;
          }
        }
      }
    }
  }
}


declare module androidx {
  export module work {
    export module impl {
      export module utils {
        export module taskexecutor {
          export class TaskExecutor {
            public static class: java.lang.Class<androidx.work.impl.utils.taskexecutor.TaskExecutor>;
            /**
             * Constructs a new instance of the androidx.work.impl.utils.taskexecutor.TaskExecutor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              postToMainThread(param0: java.lang.Runnable): void;
              getMainThreadExecutor(): java.util.concurrent.Executor;
              executeOnBackgroundThread(param0: java.lang.Runnable): void;
              getBackgroundExecutor(): androidx.work.impl.utils.SerialExecutor;
            });
            public constructor();
            public postToMainThread(param0: java.lang.Runnable): void;
            public getMainThreadExecutor(): java.util.concurrent.Executor;
            public getBackgroundExecutor(): androidx.work.impl.utils.SerialExecutor;
            public executeOnBackgroundThread(param0: java.lang.Runnable): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module utils {
        export module taskexecutor {
          export class WorkManagerTaskExecutor extends androidx.work.impl.utils.taskexecutor.TaskExecutor {
            public static class: java.lang.Class<androidx.work.impl.utils.taskexecutor.WorkManagerTaskExecutor>;
            public constructor(param0: java.util.concurrent.Executor);
            public postToMainThread(param0: java.lang.Runnable): void;
            public getMainThreadExecutor(): java.util.concurrent.Executor;
            public getBackgroundExecutor(): androidx.work.impl.utils.SerialExecutor;
            public executeOnBackgroundThread(param0: java.lang.Runnable): void;
          }
        }
      }
    }
  }
}


declare module androidx {
  export module work {
    export module impl {
      export module workers {
        export class CombineContinuationsWorker extends androidx.work.Worker {
          public static class: java.lang.Class<androidx.work.impl.workers.CombineContinuationsWorker>;
          public doWork(): androidx.work.ListenableWorker.Result;
          public constructor(param0: globalAndroid.content.Context, param1: androidx.work.WorkerParameters);
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module workers {
        export class ConstraintTrackingWorker extends androidx.work.ListenableWorker implements androidx.work.impl.constraints.WorkConstraintsCallback {
          public static class: java.lang.Class<androidx.work.impl.workers.ConstraintTrackingWorker>;
          public static ARGUMENT_CLASS_NAME: string;
          public getDelegate(): androidx.work.ListenableWorker;
          public onStopped(): void;
          public startWork(): com.google.common.util.concurrent.ListenableFuture<androidx.work.ListenableWorker.Result>;
          public isRunInForeground(): boolean;
          public onAllConstraintsMet(param0: java.util.List<string>): void;
          public onAllConstraintsNotMet(param0: java.util.List<string>): void;
          public getWorkDatabase(): androidx.work.impl.WorkDatabase;
          public getTaskExecutor(): androidx.work.impl.utils.taskexecutor.TaskExecutor;
          public constructor(param0: globalAndroid.content.Context, param1: androidx.work.WorkerParameters);
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module impl {
      export module workers {
        export class DiagnosticsWorker extends androidx.work.Worker {
          public static class: java.lang.Class<androidx.work.impl.workers.DiagnosticsWorker>;
          public doWork(): androidx.work.ListenableWorker.Result;
          public constructor(param0: globalAndroid.content.Context, param1: androidx.work.WorkerParameters);
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module multiprocess {
      export class IWorkManagerImpl {
        public static class: java.lang.Class<androidx.work.multiprocess.IWorkManagerImpl>;
        /**
         * Constructs a new instance of the androidx.work.multiprocess.IWorkManagerImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          enqueueWorkRequests(param0: native.Array<number>, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
          enqueueContinuation(param0: native.Array<number>, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
          cancelWorkById(param0: string, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
          cancelAllWorkByTag(param0: string, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
          cancelUniqueWork(param0: string, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
          cancelAllWork(param0: androidx.work.multiprocess.IWorkManagerImplCallback): void;
          queryWorkInfo(param0: native.Array<number>, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
        });
        public constructor();
        public cancelAllWorkByTag(param0: string, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
        public cancelUniqueWork(param0: string, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
        public queryWorkInfo(param0: native.Array<number>, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
        public cancelAllWork(param0: androidx.work.multiprocess.IWorkManagerImplCallback): void;
        public enqueueContinuation(param0: native.Array<number>, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
        public enqueueWorkRequests(param0: native.Array<number>, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
        public cancelWorkById(param0: string, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
      }
      export module IWorkManagerImpl {
        export class Default extends androidx.work.multiprocess.IWorkManagerImpl {
          public static class: java.lang.Class<androidx.work.multiprocess.IWorkManagerImpl.Default>;
          public cancelWorkById(param0: string, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
          public enqueueWorkRequests(param0: native.Array<number>, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
          public queryWorkInfo(param0: native.Array<number>, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
          public cancelUniqueWork(param0: string, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
          public constructor();
          public cancelAllWork(param0: androidx.work.multiprocess.IWorkManagerImplCallback): void;
          public cancelAllWorkByTag(param0: string, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
          public enqueueContinuation(param0: native.Array<number>, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
          public asBinder(): globalAndroid.os.IBinder;
        }
        export abstract class Stub implements androidx.work.multiprocess.IWorkManagerImpl {
          public static class: java.lang.Class<androidx.work.multiprocess.IWorkManagerImpl.Stub>;
          public static asInterface(param0: globalAndroid.os.IBinder): androidx.work.multiprocess.IWorkManagerImpl;
          public enqueueWorkRequests(param0: native.Array<number>, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
          public queryWorkInfo(param0: native.Array<number>, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
          public cancelUniqueWork(param0: string, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
          public static getDefaultImpl(): androidx.work.multiprocess.IWorkManagerImpl;
          public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
          public cancelAllWork(param0: androidx.work.multiprocess.IWorkManagerImplCallback): void;
          public asBinder(): globalAndroid.os.IBinder;
          public cancelWorkById(param0: string, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
          public constructor();
          public static setDefaultImpl(param0: androidx.work.multiprocess.IWorkManagerImpl): boolean;
          public cancelAllWorkByTag(param0: string, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
          public enqueueContinuation(param0: native.Array<number>, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
        }
        export module Stub {
          export class Proxy extends androidx.work.multiprocess.IWorkManagerImpl {
            public static class: java.lang.Class<androidx.work.multiprocess.IWorkManagerImpl.Stub.Proxy>;
            public static sDefaultImpl: androidx.work.multiprocess.IWorkManagerImpl;
            public cancelAllWorkByTag(param0: string, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
            public getInterfaceDescriptor(): string;
            public enqueueWorkRequests(param0: native.Array<number>, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
            public cancelAllWork(param0: androidx.work.multiprocess.IWorkManagerImplCallback): void;
            public cancelWorkById(param0: string, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
            public queryWorkInfo(param0: native.Array<number>, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
            public asBinder(): globalAndroid.os.IBinder;
            public enqueueContinuation(param0: native.Array<number>, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
            public cancelUniqueWork(param0: string, param1: androidx.work.multiprocess.IWorkManagerImplCallback): void;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module multiprocess {
      export class IWorkManagerImplCallback {
        public static class: java.lang.Class<androidx.work.multiprocess.IWorkManagerImplCallback>;
        /**
         * Constructs a new instance of the androidx.work.multiprocess.IWorkManagerImplCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
         */
        public constructor(implementation: {
          onSuccess(param0: native.Array<number>): void;
          onFailure(param0: string): void;
        });
        public constructor();
        public onFailure(param0: string): void;
        public onSuccess(param0: native.Array<number>): void;
      }
      export module IWorkManagerImplCallback {
        export class Default extends androidx.work.multiprocess.IWorkManagerImplCallback {
          public static class: java.lang.Class<androidx.work.multiprocess.IWorkManagerImplCallback.Default>;
          public onFailure(param0: string): void;
          public constructor();
          public asBinder(): globalAndroid.os.IBinder;
          public onSuccess(param0: native.Array<number>): void;
        }
        export abstract class Stub implements androidx.work.multiprocess.IWorkManagerImplCallback {
          public static class: java.lang.Class<androidx.work.multiprocess.IWorkManagerImplCallback.Stub>;
          public static setDefaultImpl(param0: androidx.work.multiprocess.IWorkManagerImplCallback): boolean;
          public onFailure(param0: string): void;
          public constructor();
          public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
          public asBinder(): globalAndroid.os.IBinder;
          public static getDefaultImpl(): androidx.work.multiprocess.IWorkManagerImplCallback;
          public static asInterface(param0: globalAndroid.os.IBinder): androidx.work.multiprocess.IWorkManagerImplCallback;
          public onSuccess(param0: native.Array<number>): void;
        }
        export module Stub {
          export class Proxy extends androidx.work.multiprocess.IWorkManagerImplCallback {
            public static class: java.lang.Class<androidx.work.multiprocess.IWorkManagerImplCallback.Stub.Proxy>;
            public static sDefaultImpl: androidx.work.multiprocess.IWorkManagerImplCallback;
            public getInterfaceDescriptor(): string;
            public onSuccess(param0: native.Array<number>): void;
            public onFailure(param0: string): void;
            public asBinder(): globalAndroid.os.IBinder;
          }
        }
      }
    }
  }
}

declare module androidx {
  export module work {
    export module multiprocess {
      export abstract class RemoteWorkContinuation {
        public static class: java.lang.Class<androidx.work.multiprocess.RemoteWorkContinuation>;
        public then(param0: java.util.List<androidx.work.OneTimeWorkRequest>): androidx.work.multiprocess.RemoteWorkContinuation;
        public enqueue(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        public combineInternal(param0: java.util.List<androidx.work.multiprocess.RemoteWorkContinuation>): androidx.work.multiprocess.RemoteWorkContinuation;
        public then(param0: androidx.work.OneTimeWorkRequest): androidx.work.multiprocess.RemoteWorkContinuation;
        public constructor();
        public static combine(param0: java.util.List<androidx.work.multiprocess.RemoteWorkContinuation>): androidx.work.multiprocess.RemoteWorkContinuation;
      }
    }
  }
}

declare module androidx {
  export module work {
    export module multiprocess {
      export abstract class RemoteWorkManager {
        public static class: java.lang.Class<androidx.work.multiprocess.RemoteWorkManager>;
        public enqueue(param0: java.util.List<androidx.work.WorkRequest>): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        public getWorkInfos(param0: androidx.work.WorkQuery): com.google.common.util.concurrent.ListenableFuture<java.util.List<androidx.work.WorkInfo>>;
        public cancelAllWorkByTag(param0: string): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        public enqueueUniquePeriodicWork(param0: string, param1: androidx.work.ExistingPeriodicWorkPolicy, param2: androidx.work.PeriodicWorkRequest): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        public enqueueUniqueWork(param0: string, param1: androidx.work.ExistingWorkPolicy, param2: java.util.List<androidx.work.OneTimeWorkRequest>): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        public beginUniqueWork(param0: string, param1: androidx.work.ExistingWorkPolicy, param2: androidx.work.OneTimeWorkRequest): androidx.work.multiprocess.RemoteWorkContinuation;
        public cancelAllWork(): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        public enqueueUniqueWork(param0: string, param1: androidx.work.ExistingWorkPolicy, param2: androidx.work.OneTimeWorkRequest): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        public enqueue(param0: androidx.work.WorkContinuation): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        public constructor();
        public static getInstance(param0: globalAndroid.content.Context): androidx.work.multiprocess.RemoteWorkManager;
        public beginWith(param0: androidx.work.OneTimeWorkRequest): androidx.work.multiprocess.RemoteWorkContinuation;
        public beginUniqueWork(param0: string, param1: androidx.work.ExistingWorkPolicy, param2: java.util.List<androidx.work.OneTimeWorkRequest>): androidx.work.multiprocess.RemoteWorkContinuation;
        public cancelUniqueWork(param0: string): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        public enqueue(param0: androidx.work.WorkRequest): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
        public beginWith(param0: java.util.List<androidx.work.OneTimeWorkRequest>): androidx.work.multiprocess.RemoteWorkContinuation;
        public cancelWorkById(param0: java.util.UUID): com.google.common.util.concurrent.ListenableFuture<java.lang.Void>;
      }
    }
  }
}

// Generics information:
// androidx.work.WorkRequest.Builder:2
// androidx.work.impl.constraints.ConstraintListener:1
// androidx.work.impl.constraints.controllers.ConstraintController:1
// androidx.work.impl.constraints.trackers.BroadcastReceiverConstraintTracker:1
// androidx.work.impl.constraints.trackers.ConstraintTracker:1
// androidx.work.impl.utils.StatusRunnable:1
// androidx.work.impl.utils.futures.AbstractFuture:1
// androidx.work.impl.utils.futures.AbstractFuture.SetFuture:1
// androidx.work.impl.utils.futures.SettableFuture:1
