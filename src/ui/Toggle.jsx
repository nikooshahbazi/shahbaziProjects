import { Field, Switch } from "@headlessui/react";
import React from "react";

export default function Toggle({ label, enabled, onChange }) {
    return (
        <div>
            <Field>
                <div className="flex items-center gap-x-2">
                    <span>{label}</span>
                    <Switch
                        checked={enabled}
                        onChange={onChange}
                        className={`${
                            enabled ? "bg-primary-700" : "bg-secondary-200"
                        } "group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"`}
                    >
                        <span
                            className={`${
                                enabled ? "translate-x-5" : "translate-x-1"
                            } inline-block h-4 w-4 transform rounded-full bg-secondary-0 transition-transform`}
                        ></span>
                    </Switch>
                </div>
            </Field>
        </div>
    );
}
